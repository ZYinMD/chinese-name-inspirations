import React from 'react';
import './Name.css';
const Name = props => {
  let 姓 = window.settings.姓;
  let 名1 = props.nameObj.name;
  let 名2 = 名1[1] + 名1[0];
  return (
    <div className='name'>
      <h2>
        {姓}{名1} / {姓}{名2}
      </h2>
    </div>
  );
};

export default Name;
