import React from "react";
import { Route, Switch } from "react-router-dom";
import AddExperience from "./containers/AddExperience/AddExperience";
import SingleExperience from "./containers/SingleExperience/SingleExperience";
import ExperienceTypeList from "./ExperienceTypeList";
import AllExperiences from "./AllExperiences";
import ExperienceList from "./containers/ExperienceList/ExperienceList";
import SignUpForm from "./containers/SignUpForm/SignUpForm";
import LoginForm from "./containers/LoginForm/LoginForm"

export default function AppRouter() {
  return (
    <>
      <Switch>
        <Route path="/experiences/add" component={AddExperience} />
        <Route exact path="/" component={ExperienceList} />
        <Route path="/experiences/:id" component={SingleExperience} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </>
  );
}
