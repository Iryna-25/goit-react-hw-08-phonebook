import React from 'react';

import { Link } from 'react-router-dom';

const LogOutForm = () => {
  return (
    <>
      <p> You have successfully logged out! </p>
      <h2>See you next time!</h2>
      <p>
        You can return to crete your phone book of contacts on this{' '}
        <Link to={'/login'}> link </Link>
      </p>
    </>
  );
};

export default LogOutForm;
