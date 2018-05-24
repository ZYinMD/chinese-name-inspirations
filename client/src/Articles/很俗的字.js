import React from 'react';
import Header from '../Components/Header';
import Back from 'react-icons/lib/md/navigate-before';

const 很俗的字 = () => (
  <div className='article-page'>
    <Header leftIcon={<Back/>} leftLink={'/settings'} title='很俗的字' headingLevel={3}/>
    <article>
      <h4>以下字被标有[很俗]的标签:</h4>
      <p>佳宁驹哲嘉豪昊昕炜莘琛睿</p>
    </article>
  </div>
);

export default 很俗的字;
