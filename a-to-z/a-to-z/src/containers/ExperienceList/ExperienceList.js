import React, { useState } from "react";
import { Link } from "react-router-dom";
import { experiences as experienceData } from "../../data/experiences";
import { Segment } from 'semantic-ui-react'
import ExperienceCard from "./ExperienceCard";
import "./ExperienceList.css";

function ExperienceList() {
  const [experiences, setExperiences] = useState(experienceData);
  return (
    <section>
      <h1>All experiences</h1>
      <div className="">
        {experiences &&
          experiences.map((experience, index) => {
            return (
              <Link to={`/experiences/${index}`} key={index}>
                <Segment>
                <ExperienceCard experience={experience} key={index} />
                </Segment>
              </Link>
            );
          })}
      </div>
    </section>
  );
}

export default ExperienceList;
