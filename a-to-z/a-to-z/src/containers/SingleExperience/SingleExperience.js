import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { Card, Image, Button, Loader, Dimmer } from "semantic-ui-react";
import './SingleExperience.css';
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
  if (!photos) {
    return (
    <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>)
  }
  return (
    <Card className="single-exp">
      <Card.Content>
        <Card.Header>{title}</Card.Header>

        <Card.Description>
          
          <p>Your Host: {host_name}</p>
          <p>Price: {price}</p>
          <p>Location: {location}</p>
          <p>Number of Guests Attending: {guests}</p>
          <p>Available? {availability ? "Yes" : "No"}</p>
          <Button as={Link} to="/login">Book this Experience Now</Button>
        </Card.Description>
      </Card.Content>
      <Image src={photos} />
    </Card>
  );
}

export default SingleExperience;
