import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NavBar = () =>{
    return(
        <div>
            <Menu>
            {/* logo */}
            <NavLink to="/">
            <Image src="https://i.ibb.co/kc2Lq8X/atoz.png" size='small' />
            </NavLink>

            {/* tabs */}
            <Menu.Menu className='menu-tabs' position='right'>
                <Menu.Item name='Host an experience' > 
                <NavLink to="/hostanexpereince">Host an experience</NavLink> 
                </Menu.Item>

                <Menu.Item name='Sign up'> 
                <NavLink to="/signup">Sign up</NavLink> 
                </Menu.Item>

                <Menu.Item name='Log in'> 
                <NavLink to="/login">Log in</NavLink> 
                </Menu.Item>
            </Menu.Menu>
            </Menu>

        </div>

    )
}

export default NavBar;
