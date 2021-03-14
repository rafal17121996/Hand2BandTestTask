import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import StoreProvider, { StoreContext } from "./store/StoreProvider";

import "./App.scss";
import Result from "./components/Result/Result";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Router>
       <StoreProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/s/:item">
            <Result />
          </Route>
        </Switch>
         </StoreProvider>
    </Router>
  );
};
export default App;
