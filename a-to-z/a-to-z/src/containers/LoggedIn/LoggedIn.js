import React, {useState, useEffect}from 'react';
import axios from 'axios';

const LoggedIn = () =>{

    const [experience, setExperience] = useState();
    console.log('before');

    useEffect(() => {
        const getExperiences = () => {
            // using mock data api since backend is not yet available
            axios
            .get('https://my.api.mockaroo.com/atoz.json?key=73b335d0')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log('unable to complete request');
            })

        }
        getExperiences();


    }, [])

    console.log('after');

    return(
        <div> </div>
    )
}

export default LoggedIn;