import React from 'react';
import './Choice.css';
const Choice = ({children, onClick, chosen}) => (
  <li onClick={onClick} className={chosen ? "chosen" : ""}>
    {children}
  </li>
);
export default Choice;
