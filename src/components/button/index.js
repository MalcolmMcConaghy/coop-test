import React from 'react';

import './index.css'
const Button = ({onButtonClick, children}) => {
  return (
    <button className="button" onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default Button;