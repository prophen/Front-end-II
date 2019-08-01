import React, { useState } from "react";
import { experiences as experienceData } from "../../data/experiences";
import { Form, Button, Header, Card } from "semantic-ui-react";
import './AddExperience.css'

function AddForm() {
  console.log();
  const [experience, setExperience] = useState(experienceData);

  function handleChange(event) {
    setExperience({ ...experience, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(experience);
  }
  return (
    <>
    <Header as='h1' block>Host an Experience</Header>
    <Card className='add-card'>
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Experience Title</label>
        <input
          placeholder="Title"
          value={experience.title}
          name="title"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Experience Location</label>
        <input
          placeholder="Location"
          value={experience.location}
          name="location"
          onChange={handleChange}
        />{" "}
      </Form.Field>

      <Button type="submit">Submit</Button>
    </Form>
    </Card>
    </>
  );
}
export default AddForm;
