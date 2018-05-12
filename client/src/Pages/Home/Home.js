import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import Gear from 'react-icons/lib/go/gear';
import Hamburger from 'react-icons/lib/io/android-menu';
import Header from '../../Components/Header';
import Name from '../../Components/Name';
import Choices from '../../Components/Choices';

var demo = ['风起', '若翩', '倚天', '涂蓝', '玺安', '观象', '夙沙', '樱焰', ]
var pointer = 0;

class Home extends Component {
  state = {
    name: demo[pointer]
  }

  handleClick = () => {
    pointer++;
    this.setState({
      name: demo[pointer]
    });
  }
  render() {
    return (
      <div className="home">
        <Header>
          <Link to='/menu' className='icon'><span><Hamburger /></span></Link>
          <h1 className='theme'>宝宝起名灵感发生器</h1>
          <Link to='/settings' className='icon'><span><Gear /></span></Link>
        </Header>
        <Name value={this.state.name}/>
        <Choices handleClick={this.handleClick}/>
      </div>
    );
  }
}
export default Home;
