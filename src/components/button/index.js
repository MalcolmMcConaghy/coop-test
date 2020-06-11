import React from 'react';

import './index.css'
const Button = ({onButtonClick, testId, children}) => {
  return (
    <button className="button" onClick={onButtonClick} data-testid={testId}>
      {children}
    </button>
  );
};

export default Button;