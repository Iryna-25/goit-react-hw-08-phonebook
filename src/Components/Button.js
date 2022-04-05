import React from 'react';

const Button = ({ type, text, onClick = null, isActive }) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
