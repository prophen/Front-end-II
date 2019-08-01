import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./ExperienceList.css";
function ExperienceCard(props) {
  const {
    title,
    photos
  } = props.experience;
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <Image src={photos} size="small" floated="left" />
          {title}
        </Card.Header>
      </Card.Content>
    </Card>
  );
}
export default ExperienceCard;
