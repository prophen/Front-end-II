import React from "react";
import AppRouter from "./AppRouter";
import NavBar from "./NavBar";

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
