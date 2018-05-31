import React, { Component } from 'react';
import './Home.css';
import Gear from 'react-icons/lib/go/gear';
import Hamburger from 'react-icons/lib/io/android-menu';
import Header from '../../Components/Header';
import Name from '../../Components/Name';
import Choices from '../../Components/Choices';

class Home extends Component {

  state = {
    isRefShown: false,
    verbose: window.settings.verbose, // if verbose, show message as title
  }

  updateLastRating = (rating, lastName) => {
    this.setState({
      lastRating: rating,
      lastName,
    });
  }

  collapseRef = () => {
    this.setState({isRefShown: false});
  }

  toggleRef = () => {
    this.setState({isRefShown: !this.state.isRefShown});
  }

  displayName = () => {
    let 名1 = this.props.nameObj.name;
    let 名2 = 名1[1] + 名1[0];
    return window.settings.姓 + 名1 + ' / ' + window.settings.姓 + 名2;
  }

  verboseOff = () => {
    this.setState({verbose: false});
    window.settings.verbose = false;
    window.updateLocalStorage();
  }

  renderTitle = () => {
    if (!this.state.verbose) {
      return <h1>宝宝起名灵感发生器</h1>;
    }
    if (this.state.lastRating === 1) {
      return <p>{this.state.lastName} 将不再展示给其他用户。<a onClick={this.verboseOff}>知道了</a></p>;
    } else {
      return <p></p>;
    }
  }

  render() {
    return (
      <div className="home">
          <Header leftIcon={<Hamburger/>} leftLink='/menu' title={this.renderTitle()} rightIcon={<Gear />} rightLink='/settings' headingLevel={6}/>
        <Name nameObj={this.props.nameObj} displayName={this.props.nameObj.name? this.displayName() : '加载中...'} undo={this.props.undo} toggleRef={this.toggleRef} isRefShown={this.state.isRefShown}/>
        <Choices collapseRef={this.collapseRef} submit={this.props.submit} nameObj={this.props.nameObj} updateLastRating={this.updateLastRating}/>
      </div>
    );
  }
}

export default Home;
