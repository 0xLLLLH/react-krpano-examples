import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import { FlexItem, HStack, VStack } from "./components/FlexContainer";
import GithubCorner from "./components/GithubCorner";
import Header from "./components/Header";
import PageDynamicHotspot from "./pages/DynamicHotspot";
import PageLoadXML from "./pages/LoadXML";
import PageSwitchScene from "./pages/SwitchScene";

function App() {
  return (
    <VStack className="App">
      {/* <Header /> */}
      <GithubCorner />
      <HStack>
        <Aside />
        <FlexItem>
          <Switch>
            <Route path="/load-xml">
              <PageLoadXML />
            </Route>
            <Route path="/switch-scene">
              <PageSwitchScene />
            </Route>
            <Route path="/dynamic-hotspot">
              <PageDynamicHotspot />
            </Route>
          </Switch>
        </FlexItem>
      </HStack>
    </VStack>
  );
}

export default App;
