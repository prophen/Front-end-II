import React from 'react';
import {Menu} from 'semantic-ui-react';

const NavTabs = () => {

    return (
    <Menu.Menu className='nav-tabs'>    
    <Menu.Item
    name='your-bookings'
    />
    <Menu.Item
    name='favorites'
    />
    <Menu.Item
    name='host'
    />
    <Menu.Item
    name='help'
    /></Menu.Menu>
    )
}
export default NavTabs




