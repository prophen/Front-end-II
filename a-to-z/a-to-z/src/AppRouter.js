import React from "react";
import { Route, Switch } from "react-router-dom";
import AddExperience from "./containers/AddExperience/AddExperience";
import SingleExperience from "./containers/SingleExperience/SingleExperience"
import App from "./App"

export default function AppRouter() {
  return (
    <Switch>
      <Route path="/experiences/add" component={AddExperience} />
      <Route path="/experiences/:id" component={SingleExperience} />
    </Switch>
  );
}
