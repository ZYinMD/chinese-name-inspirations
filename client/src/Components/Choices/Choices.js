import React from 'react';
import './Choices.css';
import Cross from 'react-icons/lib/md/clear';
import Heart from 'react-icons/lib/io/android-favorite-outline';
import Bulb from 'react-icons/lib/io/android-bulb';
import Meh from 'react-icons/lib/md/sentiment-neutral';
const Choices = props => (
  <ol className='choices'>
    <li className='choice' onClick={props.handleClick}>
      <i className='theme'><Cross /></i>
      <p>正常人都不会喜欢</p>
    </li>
    <li className='choice' onClick={props.handleClick}>
      <i className='face-icon theme'><Meh /></i>
      <p>我不喜欢, 别人或许<br/>有一定概率喜欢</p>
    </li>
    <li className='choice' onClick={props.handleClick}>
      <i className='theme'><Bulb /></i>
      <p>还行, 提供了<br/>一点灵感</p>
    </li>
    <li className='choice' onClick={props.handleClick}>
      <i className='heart theme'><Heart /></i>
      <p>好名字, 备选</p>
    </li>
  </ol>
);

export default Choices;
