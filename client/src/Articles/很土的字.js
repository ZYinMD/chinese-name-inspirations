import React from 'react';
import Header from '../Components/Header';
import Back from 'react-icons/lib/md/navigate-before';

const 很土的字 = () => (
  <div className='article-page'>
    <Header leftIcon={<Back/>} leftLink={'/settings'} title='很土的字' headingLevel={3}/>
    <article>
      <h2>以下字被贴有[很土]的标签</h2>
      <p>从前有座山</p>
    </article>
  </div>
);

export default 很土的字;
