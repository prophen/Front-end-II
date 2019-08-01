import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NavBar = () =>{
    return( 
    <div>
        {/* holds all the menu options and logo */}
        <Menu>
            {/* logo */}
            <NavLink to="/">
            <Image src="https://i.ibb.co/kc2Lq8X/atoz.png" id='logo-image' size='small' />
            </NavLink>

            {/* tabs */}
            <Menu.Menu position='right'>
                {/* linkto all experiences */}
                <Menu.Item id='all-experiences-list-link' > 
                <NavLink to="/experiences/all">See all experiences</NavLink> 
                </Menu.Item>

                <Menu.Item id='host-an-experience-link' > 
                <NavLink to="/experiences/add">Host an experience</NavLink> 
                </Menu.Item>

                <Menu.Item id='sign-up-link'> 
                <NavLink to="/signup">Sign up</NavLink> 
                </Menu.Item>

                <Menu.Item id='login-link'> 
                <NavLink to="/login">Log in</NavLink> 
                </Menu.Item>
            </Menu.Menu>
        </Menu>

    </div>






























        // <div>
        //     <Menu>
        //     {/* logo */}
        //     <NavLink to="/">
        //     <Image src="https://i.ibb.co/kc2Lq8X/atoz.png" size='small' />
        //     </NavLink>

        //     {/* tabs */}
        //     <Menu.Menu className='menu-tabs' position='right'>
        //     <Menu.Item name='All Experiences' > 
        //         <NavLink to="/experiences/all">See all experiences</NavLink> 
        //         </Menu.Item>
        //         <Menu.Item name='Host an experience' > 
        //         <NavLink to="/experiences/add">Host an experience</NavLink> 
        //         </Menu.Item>

        //         <Menu.Item name='Sign up'> 
        //         <NavLink to="/signup">Sign up</NavLink> 
        //         </Menu.Item>

        //         <Menu.Item name='Log in'> 
        //         <NavLink to="/login">Log in</NavLink> 
        //         </Menu.Item>
        //     </Menu.Menu>
        //     </Menu>

        // </div>

    )
}

export default NavBar;
