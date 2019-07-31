import React from "react";
import { experiences } from "../../data/experiences";
import {
  Card,
  Image,
} from "semantic-ui-react";
import './ExperienceList.css'

function ExperienceList() {
  return (
    <section>
      <h1>All experiences</h1>
      <div className='grid-view'>
      {experiences.map((experience,index) => {
        const { id, title, location,guests,availability,price } = experience;
        return (
          <Card key={index}>
            <Image src='https://loremflickr.com/300/300' wrapped ui={false} />
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
      })}
      </div>
    </section>
  );
}

export default ExperienceList;
