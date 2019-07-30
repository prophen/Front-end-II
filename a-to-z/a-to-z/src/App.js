import React from 'react';
import NavBar from './NavBar'
import ExperienceTypeList from './ExperienceTypeList'
import AllExperiences from './AllExperiences'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ExperienceTypeList/>
      <AllExperiences/>
    </div>
  );
}

export default App;
