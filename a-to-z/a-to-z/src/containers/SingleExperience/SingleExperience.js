import React, { useState, useEffect } from "react";
import { experiences } from "../../data/experiences";
import { Card, Image } from "semantic-ui-react";
import axios from 'axios'

function SingleExperience(props) {
  const [experience, setExperience] = useState([]);
  console.log(props);
  useEffect(() => {
    const id = props.match.params.id

    axios.get(`https://api.sheety.co/5a0ddd0f-0fe3-42ae-9556-7bbefd288e3f`)
    .then(res => {
      console.log(res.data[id])
      setExperience(res.data[id])
    })
  },[props.match.params.id])
  const {
    
    title,
    location,
    guests,
    availability,
    price,
    photos,
    host_name
  } = experience;
  console.log(experience)
  if (!experience) {
    return <div>Loading...</div>
  }
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
