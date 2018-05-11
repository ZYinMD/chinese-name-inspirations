import React from 'react';
import './Choices.css'
import Cross from 'react-icons/lib/md/clear';
const Choices = () => (
  <ol>
    <li>
    <i><Cross /></i>
      这根本不能算名字 / 任何人都不会喜欢
    </li>
    <li>
      <i></i>
      ★还行, 提供了一点灵感
    </li>
    <li>👎我不喜欢, 别人或许有一定概率喜欢</li>
    <li>❤好名字, 备选</li>
  </ol>
);

export default Choices;
