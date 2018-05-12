import React from 'react';
import Toggle from 'react-toggle';
import './Toggle.css';

const reactToggle = props => (
  <Toggle
    className='toggle'
    defaultChecked={props.checked}
    icons={false}
    onChange={props.handleToggle} />
)

export default reactToggle;
