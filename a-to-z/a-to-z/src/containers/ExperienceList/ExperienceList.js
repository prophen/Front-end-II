import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";
import ExperienceCard from "./ExperienceCard";
import "./ExperienceList.css";
import axios from "axios";

function ExperienceList() {
  useEffect(() => {
    axios
      .get("https://api.sheety.co/5a0ddd0f-0fe3-42ae-9556-7bbefd288e3f")
      .then(res => {
        setExperiences(res.data);
      });
  }, []);
  const [experiences, setExperiences] = useState([]);
  return (
    <section>
      <Header as='h1' block>All Experiences</Header>
      <div className="grid-view">
        {experiences &&
          experiences.map((experience, index) => {
            return (
              <Link to={`/experiences/${index}`} key={index}>
                <ExperienceCard experience={experience} key={index} />
              </Link>
            );
          })}
      </div>
    </section>
  );
}

export default ExperienceList;
