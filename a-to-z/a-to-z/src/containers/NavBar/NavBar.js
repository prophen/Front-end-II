import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import AddExperience from "../AddExperience/AddExperience";
import SignUpForm from "../SignUpForm/SignUpForm";
import LoginForm from "../LoginForm/LoginForm";

const NavBar = () => {
  return (
    <div>
      <Menu>
        {/* logo */}
        <Image
          src="https://i.ibb.co/kc2Lq8X/atoz.png"
          size="tiny"
          width="200px"
        />

        {/* tabs */}
        <Menu.Menu className="menu-tabs" position="right">
          <NavLink to="/experiences/add">
            {" "}
            <Menu.Item name="Host an experience" />
          </NavLink>
          <NavLink to="/signup">
            {" "}
            <Menu.Item name="Sign up" />
          </NavLink>
          <NavLink to="/login">
            <Menu.Item name="Log in" />
          </NavLink>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default NavBar;
