import React from 'react';
import Input from './Input';
import Button from './Button';

const LogInForm = () => {
  const handleInputChange = () => {};
  return (
    <form onSubmit={null}>
      <Input
        inputType="email"
        // value={''}
        name="email"
        onChange={handleInputChange}
        labelText={'Log in'}
        isValid={true}
      />
      <Input
        inputType="password"
        // value={''}
        name="password"
        onChange={handleInputChange}
        labelText={'Password'}
        isValid={true}
      />
      <Button type="sumbit" text="Log In" isActive={true} />
    </form>
  );
};

export default LogInForm;
