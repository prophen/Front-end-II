import React from 'react'
import { Button } from 'semantic-ui-react'

const NavButton = () => (
  <div className='nav-button'>
    <Button compact>dates</Button>
    <Button compact>location</Button>
    <Button compact>price</Button>
  </div>
)

export default NavButton;
