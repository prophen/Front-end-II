import React from 'react';
import { Card, Icon} from 'semantic-ui-react';

const ExperienceGenCard = (props) =>{

    const {title, image, description, host, location, type} = props;

    const extra = (
        <a>
          <Icon name='globe' />
          {location} {host}
        </a>
      )

    return(
        <Card id='experience-gen-card'
        header={title}
        meta={type}
        description={description}
        extra={extra}
        image={image}
      />

    )
}

export default ExperienceGenCard;


