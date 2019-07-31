import React, {useState} from "react";
import {experiences} from '../../data/experiences'
import {
  Card,
  Image,
} from "semantic-ui-react";


function SingleExperience(props) {

  const [experience, SetExperience] = useState(experiences[props.match.params.id])
  console.log(props)
  console.log(experience)
  return (
    <Card>
      <Card.Content>
      <p>{experience.id}</p>
     <p>{experience.title}</p>
      </Card.Content>
     
    </Card>
  )
}

export default SingleExperience
