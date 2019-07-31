import React from "react";
import {experiences} from '../../data/experiences'


function SingleExperience() {
  const experience = experiences[0]
  
  return (
    <>
     <p>{experience.id}</p>
     <p>{experience.title}</p>
    </>
  )
}

export default SingleExperience
