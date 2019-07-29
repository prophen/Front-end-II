import React from 'react';
import {Input, Image} from 'semantic-ui-react';
import NavButton from './NavButton'

const NavSearch = () => {

    return (
    <div className='nav-search'> 

    <div className='nav-img-search'> 
    <Image src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' size='tiny' width='100px'/>
    
    <Input icon='search' placeholder='Search...' ></Input>
    </div>


    <NavButton></NavButton>

    </div>
    )

}
export default NavSearch

