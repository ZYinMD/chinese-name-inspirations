import React from 'react';
import './Choices.css';
import Cross from 'react-icons/lib/md/clear';
import Heart from 'react-icons/lib/io/android-favorite-outline';
import Bulb from 'react-icons/lib/io/android-bulb';
import Meh from 'react-icons/lib/md/sentiment-neutral';
const Choices = ({nameObj, submit, collapseRef, updateLastRating}) => {

  function handleClick(rating) {
    collapseRef();
    if (!nameObj.name) return; // when name isn't ready (shown as 加载中...)
    let 名1 = nameObj.name;
    let 名2 = 名1[1] + 名1[0];
    updateLastRating(rating, 名1 + ' / ' + 名2);
    submit();
    if (rating === 2) return; // rating 2 doesn't need to be logged
    window.opinions.push({
      name: nameObj.name,
      rating,
      username: window.settings.username,
      familyName: window.settings.姓
    });
  }

  return (
    <ol className='choices'>
      <li className='choice' onClick={() => {handleClick(1)}}>
        <i className='cross theme'><Cross /></i>
        <p>正常人不可能<br/>起这个名字</p>
      </li>
      <li className='choice' onClick={() => {handleClick(2)}}>
        <i className='face-icon theme'><Meh /></i>
        <p>我不喜欢, 别人或许<br/>有一定概率喜欢</p>
      </li>
      <li className='choice' onClick={() => {handleClick(3)}}>
        <i className='theme'><Bulb /></i>
        <p>还行, 提供了<br/>一点灵感</p>
      </li>
      <li className='choice' onClick={() => {handleClick(4)}}>
        <i className='heart theme'><Heart /></i>
        <p>好名字, 备选</p>
      </li>
    </ol>
  );
};
export default Choices;
