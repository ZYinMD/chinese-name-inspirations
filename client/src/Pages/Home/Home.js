import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import Gear from 'react-icons/lib/go/gear';
import Hamburger from 'react-icons/lib/io/android-menu';
import Header from '../../Components/Header';
import Name from '../../Components/Name';
import Choices from '../../Components/Choices';

const Home = ({nameObj, submit, undo}) => (
  <div className="home">
    <Header>
      <Link to='/menu' className='icon'><Hamburger /></Link>
      <h1 className='theme'>宝宝起名灵感发生器</h1>
      <Link to='/settings' className='icon'><Gear /></Link>
    </Header>
    <Name nameObj={nameObj} undo={undo}/>
    <Choices submit={submit} name={nameObj.name}/>
  </div>
);

export default Home;
