import { useGetLayoffData } from "../Hooks/ReactQueries";
import { map, slice } from "lodash";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  FlexItem,
  PageSection,
} from "@patternfly/react-core";

export function TopCards() {
  const { data } = useGetLayoffData();
  console.log(data);
  return (
    <>
      {map(slice(data, 0, 5), (d) => (
        <FlexItem>
          <PageSection>
            <Card>
              <CardTitle>{d.name}</CardTitle>
              <CardBody>{d.layoff}</CardBody>
              <CardFooter>{d.location}</CardFooter>
            </Card>
          </PageSection>
        </FlexItem>
      ))}
    </>
  );
}
