import React from 'react';
import './List.css';
const List = props => (
  <ol>
    {props.children}
  </ol>
);

export default List;

