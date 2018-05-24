import React from 'react';

const Li = props => (
  <li className={props.disabled ? 'disabled' : null}>
    {props.children}
  </li>
);

export default Li;

