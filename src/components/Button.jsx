import React from 'react';

const Button = ({ children, onClick, theme }) => {
  return (
    <button className={"button-"+ theme} onClick={onClick}>{children}</button>
  );
};

export default Button;


  
