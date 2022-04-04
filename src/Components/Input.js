import React from 'react';

const Input = ({ inputType, value, onChange, name, isValid, labelText }) => {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input type={inputType} value={value} onChange={onChange} name={name} />
    </>
  );
};

export default Input;
