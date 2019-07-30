import React from 'react';
import {Menu} from 'semantic-ui-react';

const NavTabs = () => {

    return (
    <div className='nav-tabs'>
    <Menu.Menu >    
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
    </div>
    )
}
export default NavTabs




