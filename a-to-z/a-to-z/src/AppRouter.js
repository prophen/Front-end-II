import React from "react";
import { Route, Switch } from "react-router-dom";
import AddExperience from "./containers/AddExperience/AddExperience";
import SingleExperience from "./containers/SingleExperience/SingleExperience";
import ExperienceTypeList from "./ExperienceTypeList";
import AllExperiences from "./AllExperiences";

export default function AppRouter() {
  return (
    <>
      <Route exact path="/" component={ExperienceTypeList} />
      <Route exact path="/" component={AllExperiences} />

      <Switch>
        <Route path="/experiences/add" component={AddExperience} />
        <Route path="/experiences/:id" component={SingleExperience} />
      </Switch>
    </>
  );
}
