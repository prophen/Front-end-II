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
        <Card
        image='http://www.sparkawards.com/wp-content/uploads/2014/03/Experience3-72.jpg'
        header={title}
        meta={type}
        description={description}
        extra={extra}
      />
    )
}

export default ExperienceGenCard;


