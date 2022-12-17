import { Flex, FlexItem, Split, SplitItem } from "@patternfly/react-core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { AppLayout } from "./components/AppLayout";
import { LayoffTable } from "./components/LayoffTable";
import { TopCards } from "./components/TopCards";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <Split hasGutter>
          <SplitItem></SplitItem>
          <SplitItem isFilled>
            <Flex direction={{ default: "column" }}>
              <Flex>
                <TopCards />
              </Flex>
              <FlexItem>
                <LayoffTable />
              </FlexItem>
            </Flex>
          </SplitItem>
          <SplitItem></SplitItem>
        </Split>
      </AppLayout>
    </QueryClientProvider>
  );
}

export default App;
