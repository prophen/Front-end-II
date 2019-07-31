import React from "react";
import {
  Card,
  Image,
} from "semantic-ui-react";

function ExperienceCard(props) {
  const { id, title, location,guests,availability,price } = props.experience;
  return (
    <Card>
      <Image src='http://www.sparkawards.com/wp-content/uploads/2014/03/Experience3-72.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>Price: {price}</Card.Meta>
        <Card.Description>
          <p>Location: {location}</p>
          <p>Id: {id}</p>
          <p>Guests: {guests}</p>
          <p>Available? {availability ? 'Yes' : 'No' }</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
export default ExperienceCard