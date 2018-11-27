import React from 'react';
import Header from '../Header/';
import Back from 'react-icons/lib/md/navigate-before';
import './Articles.css';

const AutoMode = () => (
    <div className='plain-article'>
      <Header leftIcon={<Back/>} leftLink={'/settings'} title='什么是智能模式' headingLevel={3}/>
      <article>
        <p>"智能模式"是一个预设算法, 致力于生成本软件作者个人喜欢的名字类型</p>
      </article>
    </div>
  );
export default AutoMode;
