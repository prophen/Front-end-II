import React from "react";
import AppRouter from "./AppRouter";
import NavBar from "./containers/NavBar/NavBar.js";
import LoggedIn from "./containers/LoggedIn/LoggedIn.js";

import "./App.css";

function App() {
  return (
    <div className="App bg-photo"> 
    {/* style={{  
      backgroundImage: "url(" + "https://images.unsplash.com/photo-1436811460420-a04ba62d66fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100rem',
    }} > */}
      <NavBar />
      <AppRouter />

    </div>
  );
}

export default App;
