import React from 'react';
import './Name.css';
const Name = props => (
  <div className='name'>
    <h2>{props.value}</h2>
  </div>
);

export default Name;
