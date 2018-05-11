import React, { Component } from 'react';
import './Home.css';
import Header from '../../Components/Header';
import Name from '../../Components/Name';
import Choices from '../../Components/Choices';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header/>
        <Name/>
        <Choices/>
      </div>
    );
  }
}
export default Home;
