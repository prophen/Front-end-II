import React, {useState, useEffect}from 'react';
import {Grid, Item, Icon} from 'semantic-ui-react';
import axios from 'axios';
import ExperienceTypeCard from './ExperienceTypeCard';
import {Link} from 'react-router-dom';


const LoggedIn = () =>{

    const [experience, setExperience] = useState([]);
  
    useEffect(() => {
        const getExperiences = () => {
            // using mock data api since backend is not yet available
            axios
            .get('https://my.api.mockaroo.com/atoz.json?key=73b335d0')
            .then(response => {
                console.log(response.data);
                setExperience((response.data));
            })
            .catch(error => {
                console.log('unable to complete request');
            })
        }
        getExperiences();
    }, [])

    
    return(

        <div >
            <Item>Chose Experience Type</Item>

            <Grid columns={4} centered >
            {experience.slice(0, 4).map((i, key) => (
                <Grid.Column><ExperienceTypeCard key={key} title={i.titleActivity} image={i.imageActivity}/> </Grid.Column>
            ))}

            </Grid>

            <Item>All Experience</Item> 
            <Link to='/experiences/all'>  <Icon name='angle right' size='large' />
            </Link>



        </div>
    )


}

export default LoggedIn;