import React from 'react';
import { Menu, Image } from 'semantic-ui-react';

const NavBar = () =>{
    return(
        <div>
            <Menu>
            {/* logo */}
            <Image src="https://i.ibb.co/kc2Lq8X/atoz.png" size='tiny' width='200px'/>

            {/* tabs */}
            <Menu.Menu className='menu-tabs' position='right'>
                <Menu.Item name='Host an experience'/>
                <Menu.Item name='Sign up'/>
                <Menu.Item name='Log in'/>
            </Menu.Menu>
            </Menu>

        </div>

    )
}

export default NavBar;
