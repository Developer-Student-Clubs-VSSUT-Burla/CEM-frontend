import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";

const IndexRouter = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              exact
              path={route.path}
              component={() => {
                return (
                  <route.layout>
                    <route.component />
                  </route.layout>
                );
              }}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default IndexRouter;
