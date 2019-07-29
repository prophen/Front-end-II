import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <Icon name='user' />
)

const ExperienceTypeCard = () => (
  <Card
    image ='http://www.sparkawards.com/wp-content/uploads/2014/03/Experience3-72.jpg'
    header='header'
    meta='meta'
    description='description'
    extra={extra}
  />
)

export default ExperienceTypeCard;
