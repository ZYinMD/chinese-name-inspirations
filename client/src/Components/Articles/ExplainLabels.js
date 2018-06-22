import React from 'react';
import Header from '../Header/';
import Back from 'react-icons/lib/md/navigate-before';
import source from './各种标签的字都有哪些.json';
import './Articles.css';

const ExplainLabels = ({title, displayLabel, dbLabel}) => {

  function handle三级字表() {
    switch (displayLabel) {
      case '清奇':
        return <h4>以下字被标有[清奇]的标签, 出现率提高一丝丝: </h4>;
      case '作者喜欢':
        return <h4>以下字被标有[作者喜欢]的标签, 出现率提高一点点: </h4>;
      case '第三级字表':
        return <h4>《通用规范汉字表 - 三级字表》规定了最不常用的1605个汉字:</h4>;
      default:
        return <h4>以下字被标记为带有 [{displayLabel}] 的属性:</h4>;
    }
  }

  return (
    <div className='labeled-chars'>
      <Header leftIcon={<Back/>} leftLink={'/settings'} title={title} headingLevel={3}/>
      <article>
        {handle三级字表()}
        <p>{source[dbLabel]}</p>
      </article>
    </div>
  );
};
export default ExplainLabels;
