import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/';
import Back from 'react-icons/lib/md/navigate-before';

const Article = ({parent, title, content}) => (
  <div className='article-page'>
    <Header>
      <Link to={parent}><Back className='icon'/></Link>
      <h1>{title}</h1>
      <span className='placeholder'>foo</span>
    </Header>
    {content}
  </div>
);

export default Article;

