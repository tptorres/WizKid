import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavBar = () => {
    return(
      <Menu>
        <Menu.Item name='edubility' >
          <Link to="/"><b>WizKid</b></Link>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='about' >
            About Us
          </Menu.Item>
          <Menu.Item name='login' >
            Log In
          </Menu.Item>
          <Menu.Item name='signup'>
            Sign Up
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}

export default NavBar
