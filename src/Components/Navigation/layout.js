import React, { Fragment } from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
