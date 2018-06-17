import React from 'react';
import Toggle from 'react-toggle';
import './Toggle.css';

const reactToggle = props => {
  function handleToggle(e) {
    if (props.label) { // most of the time a label prop is passed
      if (e.target.checked) window.settings.allowed.push(props.label);
      else window.settings.allowed.splice(window.settings.allowed.indexOf(props.label), 1);
    } else {
      window.settings[props.setting] = e.target.checked; // in very few cases, a toggle isn't a label, then the prop setting is used
    }
    window.updateLocalStorage();
    window.settingsChange();
  }
  return (
  <Toggle
    className='toggle'
    defaultChecked={props.checked}
    icons={false}
    disabled={props.disabled}
    onChange={handleToggle} />
  );
};
export default reactToggle;
