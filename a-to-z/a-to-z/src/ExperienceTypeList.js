import React from 'react'
// import {Grid} from 'semantic-ui-react';
// import React, {useState } from 'react';
import ExperienceTypeCard from './ExperienceTypeCard'

export default function ExperienceTypeList() {
    // const [experienceses, setExperienceses] = useState([]);

    return (
    <section className='experienceses-list'>
        I am the list of wonderful experienceses
        <ExperienceTypeCard/>
        <ExperienceTypeCard/>
        <ExperienceTypeCard/>
        <ExperienceTypeCard/>
    </section>
    )
  }
  