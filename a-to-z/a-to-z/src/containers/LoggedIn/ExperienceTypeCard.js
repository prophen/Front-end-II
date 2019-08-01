import React from 'react';
import {Card, Image} from 'semantic-ui-react';

const ExperienceTypeCard = (props) =>{

    const {title, image} = props;

    return(
        <Card >
            <Image src={image} wrapped ui={false}/>
            <Card.Content>
                {title}
            </Card.Content>
        </Card>
    )
}

export default ExperienceTypeCard;

