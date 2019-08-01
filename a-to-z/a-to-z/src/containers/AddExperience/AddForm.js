import React, {useState} from 'react'
import { experiences as experienceData } from "../../data/experiences";
import { Form, Button } from 'semantic-ui-react'

function AddForm() {
  console.log()
  const [experience, setExperience] = useState(experienceData)

  function handleChange(event) {
    setExperience({...experience, [event.target.name]: event.target.value})
  }
  function handleSubmit(event) {
    event.preventDefault()
    console.log(experience)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <input placeholder="Title" value={experience.title} name="title" onChange={handleChange} />
      <input placeholder="Location" value={experience.location} name="location" onChange={handleChange} />
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
export default AddForm