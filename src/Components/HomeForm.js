import React from 'react';

import { Link } from 'react-router-dom';

const HomeForm = () => {
  return (
    <>
      <h2>Welcome!</h2>
      <p>Create your phone book of contacts</p>
      <p>
        <Link to={'/signup'}>Sign Up</Link> (for new users) or <Link to={'/login'}> Log In </Link>{' '}
        to get access to your contacts.
      </p>
    </>
  );
};

export default HomeForm;

// import Input from './Input';
// import Button from './Button';

// const HomeForm = () => {
//     const handleInputChange = () => { };
//     return (
//         <form onSubmit={null}>
//             <Input
//                 inputType="email"
//                 value={''}
//                 name="email"
//                 onChange={handleInputChange}
//                 labelText={'Log in'}
//                 isValid={true}
//             />
//             <Input
//                 inputType="password"
//                 value={''}
//                 name="password"
//                 onChange={handleInputChange}
//                 labelText={'Password'}
//                 isValid={true}
//             />
//             <Button type="sumbit" text="Log In" isActive={true} />
//         </form>
//     );
// };

// export default HomeForm;
