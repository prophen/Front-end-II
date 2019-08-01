import React from "react";
import {
  Card,
  Image,
} from "semantic-ui-react";
import './ExperienceList.css'
function ExperienceCard(props) {
  const { id, title, location,guests,availability,price } = props.experience;
  return (
    <Card fluid>
      <Card.Content>
      
        <Card.Header><Image src='http://www.sparkawards.com/wp-content/uploads/2014/03/Experience3-72.jpg' size='small' floated='left' />{title}</Card.Header>
       
      </Card.Content>
    </Card>
  );
}
export default ExperienceCard