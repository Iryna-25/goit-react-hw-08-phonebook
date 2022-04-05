import React, { useState } from "react";

import { Link } from 'react-router-dom';

function RegisterForm() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const user = useSelector(state => state.auth.user);
  // User Login info
  const database = [
    {
      username: "user1",
      email: "test@gmail.com",
      password: "pass1",
    }
  ];

  const errors = {
    uname: "invalid username",
    email: "invalid email",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass, email } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      }
      else if (userData.email !== email.value) {
        // Invalid password
        setErrorMessages({ name: "email", message: errors.email });
      }
      else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label> Name </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label> Email </label>
          <input type="email" name="email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label> Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type="submit"> Sign Up </button >
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title"> Registration </div>
        {isSubmitted ?
          <div>
            <p>You are registred! Nice to see you, </p>
            <p> Please create phone book here. </p>
            <p>
              <Link to={'/contacts'}> <button> My phonebook </button> </Link>
            </p>
            <p>
              <Link to={'/'}> <button> Log Out </button> </Link>
            </p>
          </div> : renderForm}
      </div>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default RegisterForm;
















// import React from 'react';
// import Input from './Input';
// import Button from './Button';

// const SignUpForm = () => {
//   const handleInputChange = () => {};
//   return (
//     <form>
//       <Input
//         inputType="email"
//         // value={''}
//         name="email"
//         onChange={handleInputChange}
//         labelText={'Log in'}
//         isValid={true}
//       />
//       <Input
//         inputType="password"
//         // value={''}
//         name="password"
//         onChange={handleInputChange}
//         labelText={'Password'}
//         isValid={true}
//       />
//       <Input
//         inputType="password"
//         // value={''}
//         name="passwordConfirm"
//         onChange={handleInputChange}
//         labelText={'Confirm password'}
//         isValid={true}
//       />
//       <Button type="sumbit" text="Sing Up" isActive={true} />
//     </form>
//   );
// };

// export default SignUpForm;
