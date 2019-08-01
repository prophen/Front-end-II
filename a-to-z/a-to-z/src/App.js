import React from "react";
import AppRouter from "./AppRouter";
import NavBar from "./containers/NavBar/NavBar.js";
import LoggedIn from "./containers/LoggedIn/LoggedIn.js";

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
