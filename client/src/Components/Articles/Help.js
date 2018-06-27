import React from 'react';
import Header from '../Header/';
import Back from 'react-icons/lib/md/navigate-before';

import Cross from 'react-icons/lib/md/clear';
import Heart from 'react-icons/lib/io/android-favorite-outline';
import Bulb from 'react-icons/lib/io/android-bulb';
import Meh from 'react-icons/lib/md/sentiment-neutral';

import './Articles.css';

const Help = () => (
    <div className='plain-article'>
      <Header leftIcon={<Back/>} leftLink={'/menu'} title='如何使用本软件' headingLevel={3}/>
      <article>
        <h4>给名字评级: </h4>
        <p>标<Cross className='icon'/>的, 所有用户都不会再看到</p>
        <p>标<Meh className='icon'/>的, 你自己以后不会再看到</p>
        <p>标<Bulb className='icon'/>和<Heart className='icon'/>的, 会储存在列表, 大家以后都可以查看</p>
        <h4>设置:</h4>
        <p>如果相信作者的品味, 请使用智能模式。</p>
        <p>如果想要中规中矩、四平八稳的名字, 请开启"无趣的字"和"虚无空泛的字"。</p>
        <p>如果想要艺人风、民国风、淘宝专业起名风、台湾风、算命先生风, 请开启"被用得略多"以及"被用得太多"的字。</p>
        <p>如果想要新中国初期的名字, 请开启"略土"和"很土"的字。</p>
        <p>如果想要网名、游戏角色名、文学影视作品角色名, 请开启"只适用于虚构人物的字"以及"否定或反义的字"。</p>
        <p>如果想要书僮、丫鬟、龙套、配角的名字, 请开启"不够大气的字"。</p>
        <p>如果想寻找脑洞, 请开启"不太好用"和"很难用"的字。</p>
      </article>
    </div>
  );
export default Help;
