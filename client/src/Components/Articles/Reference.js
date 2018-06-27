import React from 'react';
import Header from '../Header/';
import Back from 'react-icons/lib/md/navigate-before';
import Expand from 'react-icons/lib/md/keyboard-arrow-down';

import './Articles.css';

const Reference = () => (
    <div className='plain-article'>
      <Header leftIcon={<Back/>} leftLink={'/menu'} title='本App能搜索的典籍' headingLevel={3}/>
      <article>
        <p>有时名字右边的<Expand/>图标会变为蓝绿色或黑色, 表示该名字也许能找到出处</p>
        <p>目前本App能搜索出处的典籍包括《诗经》《楚辞》《唐诗三百首》《宋词三百首》《古诗三百首》《乐府诗集》《辞赋精选》。感谢Github的holynova帮助整理。</p>
        <p>未来计划添加的典籍包括《尚书》《道德经》《庄子》《论语》。敬请期待。</p>
      </article>
    </div>
  );
export default Reference;
