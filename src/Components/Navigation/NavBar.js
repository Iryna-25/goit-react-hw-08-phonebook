import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/register"> Sign Up </Link>
      </li>
      <li>
        <Link to="/login"> Log In </Link>
      </li>
      {/* <li>
        <Link to="/contacts"> Contacts </Link>
      </li> */}
      {/* <li>
        <Link to="/logout"> Log Out </Link>
      </li> */}
    </ul>
  );
};

export default NavBar;
