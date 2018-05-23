import React from 'react';
import Toggle from 'react-toggle';
import './Toggle.css';

const reactToggle = props => {
  function handleToggle(e) {
    if (props.label) {
      if (e.target.checked) window.settings.allowed.add(props.label);
      else window.settings.allowed.delete(props.label);
    } else {
      window.settings[props.setting] = e.target.checked;
    }

  }
  return (
  <Toggle
    className='toggle'
    defaultChecked={props.checked}
    icons={false}
    onChange={handleToggle} />
  );
};
export default reactToggle;
