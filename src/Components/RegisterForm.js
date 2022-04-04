import React from 'react';
import Input from './Input';
import Button from './Button';

const SignUpForm = () => {
  const handleInputChange = () => {};
  return (
    <form>
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
      <Input
        inputType="password"
        // value={''}
        name="passwordConfirm"
        onChange={handleInputChange}
        labelText={'Confirm password'}
        isValid={true}
      />
      <Button type="sumbit" text="Sing Up" isActive={true} />
    </form>
  );
};

export default SignUpForm;
