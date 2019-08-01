import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./ExperienceList.css";

function ExperienceCard(props) {
  const { title, photos } = props.experience;
  return (
    <Card className="all-cards">
      <Image src={photos} size="medium" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
      </Card.Content>
    </Card>
  );
}
export default ExperienceCard;
