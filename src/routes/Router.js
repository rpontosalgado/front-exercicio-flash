import React from "react";

import { Route, Switch } from "react-router-dom";

import EmployeeListPage from "../screens/EmployeeListPage/EmployeeListPage";
import HomePage from "../screens/HomePage/HomePage";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <HomePage />
      </Route>
      <Route exact path={"/:company"}>
        <EmployeeListPage />
      </Route>
    </Switch>
  );
};

export default Router;