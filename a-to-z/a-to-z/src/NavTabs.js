import React from 'react';
import { NavLink } from 'react-router-dom'
import {Menu} from 'semantic-ui-react';



const NavTabs = () => {

    return (
    <div className='nav-tabs'>
    <Menu.Menu >  
    <NavLink to="/experiences/all">
    <Menu.Item
    name='your-bookings'
    />
    </NavLink>
    <Menu.Item
    name='favorites'
    />
    <NavLink to="/experiences/add">
    <Menu.Item
    name='host'
    />
    </NavLink>
    <Menu.Item
    name='help'
    /></Menu.Menu>
    </div>
    )
}
export default NavTabs




