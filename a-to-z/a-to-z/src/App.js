import React from "react";
import AppRouter from "./AppRouter";
import NavBar from "./containers/NavBar/NavBar.js";
import SignUpForm from "./containers/SignUpForm/SignUpForm.js";
import LoginForm from "./containers/LoginForm/LoginForm.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
