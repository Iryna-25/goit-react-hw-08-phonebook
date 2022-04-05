import React from 'react';

import { Link } from 'react-router-dom';

const HomeForm = () => {
  return (
    <>
      <h2>Welcome!</h2>
      <p>Create your phone book of contacts</p>
      <p>
        <Link to={'/register'}>Sign Up</Link> (for new users) or <Link to={'/login'}> Log In </Link>{' '}
        to get access to your contacts.
      </p>
    </>
  );
};

export default HomeForm;
