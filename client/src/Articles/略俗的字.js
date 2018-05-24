import React from 'react';
import Header from '../Components/Header';
import Back from 'react-icons/lib/md/navigate-before';

const 略俗的字 = () => (
  <div className='article-page'>
    <Header leftIcon={<Back/>} leftLink={'/settings'} title='略俗的字' headingLevel={3}/>
    <article>
      <h4>以下字被标有[略俗]的标签:</h4>
      <p>川益朗迪丰捷彬龙泽宜铭逸鸿渊涵迅信克辰智竣轩谦媚桦启峻劲航熙翰馨岚钊弈奕帼铠琦慊鲲寰濠瀚曦懿</p>
    </article>
  </div>
);

export default 略俗的字;
