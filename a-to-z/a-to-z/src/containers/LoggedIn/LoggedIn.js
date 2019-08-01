import React, {useState, useEffect}from 'react';
import {Grid, Item, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ExperienceTypeCard from './ExperienceTypeCard';
import ExperienceGenCard from './ExperienceGenCard';
import { request } from 'http';

const LoggedIn = () =>{
    // using mock data api since backend is not yet available

    // to handle mockaroo request, limited  to 200 per day
    const [experience, setExperience] = useState([]); 

    useEffect(() => {
        const getExperiences = () => {
            axios
            .get('https://my.api.mockaroo.com/atoz.json?key=73b335d0')
            .then(response => {
                setExperience((response.data));
            })
            .catch(error => {
                console.log('unable to complete request');
            })
        }
        getExperiences();
    }, [])

    // to handle sheety request, as a backup for mockaroo
    const [experienceN, setExperienceN] = useState([]);

    useEffect(() => {
        const getExperiencesN = () => {
            axios
            .get('https://api.sheety.co/5a0ddd0f-0fe3-42ae-9556-7bbefd288e3f')
            .then(response => {
                console.log(response.data);
                setExperienceN((response.data));
                console.log(response.data);
            })
            .catch(error => {
                console.log('unable to complete request');
            })
        }
        getExperiencesN();
    }, [])

    
    return(

        <div id='logged-page-view'>
            <Grid container>

            <h2>Chose Experience Type</h2>

            {/* display types of the expereinces by category */}
            <Grid container columns={4} centered >
                {experience.slice(0, 4).map((i, key) => (
                    <Grid.Column><ExperienceTypeCard key={key} title={i.titleActivity} image={i.imageActivity}/> </Grid.Column>
            ))}
            </Grid> 

            {/* link to the full list of expereinces */}
            <h2>
                All Experience 
                <Link to='/experiences/all' > <Icon name='angle right' size='large'/>
                </Link> 
            </h2>

            {/* display some of the expereinces details */}
            {/* sheety version */}
            <Grid  container columns={5} centered >
                {experience.slice(0, 5).map((i, key) => (
                    <Grid.Column><ExperienceGenCard key={key} title={i.titleActivity} image={i.imageActivity} description={i.descriptionActivity} host={i.hostActivity} location={i.locationActivity} type={i.typeActivity}/>
                    </Grid.Column>
            ))}
            </Grid>
            
            {/* display some of the expereinces details */}
            {/* mockaroo version */}
            <Grid  container columns={3} centered >
            {experienceN.map((i, key) => (
                <Grid.Column><ExperienceGenCard key={key} availability={i.availability} image={i.photos} price={i.price} host={i.host_name} location={i.location} type={i.title}/> </Grid.Column>
            ))}
            </Grid> 
            </Grid>
        </div>
    )
}

export default LoggedIn;