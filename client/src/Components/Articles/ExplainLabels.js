import React from 'react';
import Header from '../Header/';
import Back from 'react-icons/lib/md/navigate-before';
import source from './各种标签的字都有哪些.json';

const ExplainLabels = ({title, displayLabel, dbLabel}) => (
  <div className='article-page'>
    <Header leftIcon={<Back/>} leftLink={'/settings'} title={title} headingLevel={3}/>
    <article>
      <h4>以下字被标有[{displayLabel}]的标签:</h4>
      <p>{source[dbLabel]}</p>
    </article>
  </div>
);

export default ExplainLabels;
