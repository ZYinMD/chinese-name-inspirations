import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import Gear from 'react-icons/lib/go/gear';
import Hamburger from 'react-icons/lib/io/android-menu';
import Header from '../../Components/Header';
import Name from '../../Components/Name';
import Choices from '../../Components/Choices';

class Home extends Component {

  state = {
    isRefShown: false
  }

  collapseRef = () => {
    this.setState({isRefShown: false});
  }

  toggleRef = () => {
    this.setState({isRefShown: !this.state.isRefShown});
  }

  render() {
    return (
      <div className="home">
        <Header>
          <Link to='/menu' className='icon'><Hamburger /></Link>
          <h1 className='theme'>宝宝起名灵感发生器</h1>
          <Link to='/settings' className='icon'><Gear /></Link>
        </Header>
        <Name nameObj={this.props.nameObj} undo={this.props.undo} toggleRef={this.toggleRef} isRefShown={this.state.isRefShown}/>
        <Choices collapseRef={this.collapseRef} submit={this.props.submit} name={this.props.nameObj.name}/>
      </div>
    );
  }
}

export default Home;
