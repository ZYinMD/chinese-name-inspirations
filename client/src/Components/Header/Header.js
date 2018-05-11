import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import Gear from 'react-icons/lib/go/gear';
import Hamburger from 'react-icons/lib/io/android-menu';

const Header = () => (
  <header>
    <Link to='/settings' className='icon'><span><Hamburger /></span></Link>
        <h1 className='theme'>宝宝起名灵感发生器</h1>
    <Link to='/settings' className='icon'><span><Gear /></span></Link>

  </header>
);

export default Header;

