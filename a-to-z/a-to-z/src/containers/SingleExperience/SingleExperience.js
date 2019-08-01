import React, { useState } from "react";
import { experiences } from "../../data/experiences";
import { Card, Image } from "semantic-ui-react";

function SingleExperience(props) {
  const [experience, SetExperience] = useState(
    experiences[props.match.params.id]
  );
  console.log(props);
  console.log(experience);
  const {
    
    title,
    location,
    guests,
    availability,
    price,
    photos,
    host_name
  } = experience;
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{title}</Card.Header>

        <Card.Description>
          <Image src={photos} floated="right" />
          <p>Your Host: {host_name}</p>
          <p>Price: {price}</p>
          <p>Location: {location}</p>
          <p>Number of Guests Attending: {guests}</p>
          <p>Available? {availability ? "Yes" : "No"}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default SingleExperience;
