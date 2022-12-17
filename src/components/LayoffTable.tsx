import { useGetLayoffData } from "../hooks/ReactQueries";
import {
  Badge,
  Card,
  PageSection,
  SearchInput,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from "@patternfly/react-core";
import { Table, TableHeader, TableBody } from "@patternfly/react-table";
import { map, filter, includes, lowerCase, trim } from "lodash";
import { useState } from "react";

const columns = [
  {
    title: "Company",
    props: { width: 10 },
  },
  { title: "Location", props: { width: 10 } },
  { title: "Laid Off", props: { width: 10 } },
  { title: "%" },
  { title: "Date" },
  { title: "Source" },
];

export function LayoffTable() {
  const { data } = useGetLayoffData();
  const [companyName, setCompanyName] = useState("");
  console.log(data);
  const filterData = filter(data, (d) =>
    includes(lowerCase(d.name), lowerCase(trim(companyName)))
  );
  const tableRows = map(filterData, (d) => ({
    cells: [
      d.name,
      d.location,
      d.layoff,
      d.percentage,
      d.date,
      <>
        <a rel="noreferrer" target="_blank" href={d.source}>
          {d.source}
        </a>
      </>,
    ],
  }));

  const renderToolbar = () => {
    return (
      <Toolbar>
        <ToolbarContent>
          <ToolbarItem variant="search-filter">
            <SearchInput
              placeholder="Find by company name"
              value={companyName}
              onChange={(value) => setCompanyName(value)}
              onClear={() => setCompanyName("")}
            />
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    );
  };

  return (
    <PageSection>
      Company Name:{" "}
      {map(data, (d) => (
        <Badge className="mr-5" key={d.name} screenReaderText={d.name}>
          {d.name}
        </Badge>
      ))}
      <Card>
        {renderToolbar()}
        <Table aria-label="Layoff table data" cells={columns} rows={tableRows}>
          <TableHeader />
          <TableBody />
        </Table>
      </Card>
    </PageSection>
  );
}
