import React from 'react';
import Header from '../Header/';
import Back from 'react-icons/lib/md/navigate-before';

import './Articles.css';

const Faq = () => (
    <div className='plain-article'>
      <Header leftIcon={<Back/>} leftLink={'/menu'} title='常见问题' headingLevel={3}/>
      <article>
        <h4>展示的名字会不会有重复的? 感觉来来去去都见过了</h4>
        <p>只要你没换过用户名, 已评过的名字是不会再出现的。也许一个名字的2个字你都分别见过了, 觉得眼熟, 但其实这个组合还没见过。使用"智能模式"尤其容易有这个感觉, 因为智能模式的名字风格都很像。</p>
        <h4>为什么访问速度这么慢? </h4>
        <p>作者身在美帝, 为了省事, deploy在了Heroko, 所以天朝的访问速度会慢一些。</p>
        <h4>为什么要写这个软件? </h4>
        <p>作者写给自己用的。</p>
        <h4>用什么写的? </h4>
        <p>React, Mongo, Node, Express, 手工CSS</p>
        <h4>有Github吗? </h4>
        <p>有, 但暂时不放了, 万一作者哪天学了React Native, 弄成个app也说不定。</p>
        <h4>如何提建议、汇报bug?</h4>
        <p>请用留言板。</p>
      </article>
    </div>
  );
export default Faq;
