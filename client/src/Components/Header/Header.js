import React from 'react';
import './Header.css';
import Gear from 'react-icons/lib/go/gear';
import Hamburger from 'react-icons/lib/io/android-menu';

const Header = () => (
  <header>
    <span className='icon'><Hamburger /></span>
    <h1>宝宝起名灵感发生器</h1>
    <span className='icon'><Gear /></span>
  </header>
);

export default Header;

