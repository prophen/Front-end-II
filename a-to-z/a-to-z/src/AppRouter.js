import React from "react";
import { Route, Switch } from "react-router-dom";
import AddExperience from "./containers/AddExperience/AddExperience";
import SingleExperience from "./containers/SingleExperience/SingleExperience";
import ExperienceTypeList from "./ExperienceTypeList";
import AllExperiences from "./AllExperiences";
import ExperienceList from "./containers/ExperienceList/ExperienceList"

export default function AppRouter() {
  return (
    <>
      <Switch>
        <Route path="/experiences/add" component={AddExperience} />
        <Route path="/experiences/all" component={ExperienceList} />
        <Route path="/experiences/:id" component={SingleExperience} />
      </Switch>
    </>
  );
}
