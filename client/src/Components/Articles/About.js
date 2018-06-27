import React from 'react';
import Header from '../Header/';
import Back from 'react-icons/lib/md/navigate-before';

import './Articles.css';

const About = () => (
    <div className='plain-article'>
      <Header leftIcon={<Back/>} leftLink={'/menu'} title='关于本App' headingLevel={3}/>
      <article>
        <h4>为什么要写这个软件? </h4>
        <p>作者写给自己用的。</p>
        <h4>用什么写的? </h4>
        <p>React, Mongo, Node, Express, 纯手工CSS</p>
        <h4>为什么访问速度这么慢? </h4>
        <p>作者身在美帝, 为了省事, deploy在了Heroko, 所以天朝的访问速度会慢一些。</p>
        <h4>有Github吗? </h4>
        <p>有, 但暂时不放了, 万一作者哪天学会React Native, 弄成个app也说不定。</p>
        <h4>如何提建议、汇报bug?</h4>
        <p>请使用留言板。</p>
      </article>
    </div>
  );
export default About;
