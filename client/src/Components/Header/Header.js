import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = ({leftIcon, leftLink, title, headingLevel, rightIcon, rightLink}) => {

  function renderTitle() {
    switch (headingLevel) {
      case 1:
        return <h1>{title}</h1>;
      case 2:
        return <h2>{title}</h2>;
      case 3:
        return <h3>{title}</h3>;
      default:
        return <div>{title}</div>;
    }
  }

  return (
    <div>
      <header>
        <Link to={leftLink}><i className='icon'>{leftIcon}</i></Link>
        {renderTitle()}
        {rightIcon ?
          <Link to={rightLink}><i className='icon'>{rightIcon}</i></Link> :
          <span className='placeholder'>foo</span>}
      </header>
      <div className='fake-header'></div>
    </div>
  );
};

export default Header;

