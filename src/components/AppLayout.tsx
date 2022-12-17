import {
  Masthead,
  MastheadBrand,
  MastheadMain,
  Page,
  PageSection,
  PageSectionVariants,
} from "@patternfly/react-core";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export function AppLayout({ children }: IProps) {
  const header = (
    <Masthead>
      <MastheadMain>
        <MastheadBrand href="https://patternfly.org" target="_blank">
          Layoff Tracker
        </MastheadBrand>
      </MastheadMain>
    </Masthead>
  );
  return (
    <Page header={header}>
      <PageSection variant={PageSectionVariants.light}>{children}</PageSection>
    </Page>
  );
}
