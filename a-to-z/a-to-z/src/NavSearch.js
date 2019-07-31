import React from 'react';
import {Input, Image, Icon} from 'semantic-ui-react';
import NavButton from './NavButton'

const NavSearch = () => {

    return (
    <div className='nav-search'> 

    <div className='nav-img-search'> 
    <Image src="https://i.ibb.co/kc2Lq8X/atoz.png" size='tiny' width='200px'/>
    <Input icon='search' placeholder='Search...'></Input>
  
    
    </div>


    <NavButton></NavButton>

    </div>
    )

}
export default NavSearch

