import React, {useState} from "react";
import { experiences as experienceData } from "../../data/experiences";

import ExperienceCard from "./ExperienceCard"
import './ExperienceList.css'

function ExperienceList() {

  const [experiences, setExperiences] = useState(experienceData)
  return (
    <section>
      <h1>All experiences</h1>
      <div className='grid-view'>
      {experiences && experiences.map((experience,index) => {
        return <ExperienceCard experience={experience} key={index} />
      })}
      </div>
    </section>
  );
}

export default ExperienceList;
