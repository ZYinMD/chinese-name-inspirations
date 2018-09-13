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
    let char1 = <span className='given-name-char' onClick={() => {this.handleFixChar(1)}}>{this.props.nameObj.name[0]}</span>;
    let char2 = <span className='given-name-char' onClick={() => {this.handleFixChar(2)}}>{this.props.nameObj.name[1]}</span>;
    return <span>{window.settings.姓}{char1}{char2} / {window.settings.姓}{char2}{char1}</span>;
  }

  handleFixChar = which => {
    var char = this.props.nameObj.name[which - 1];
    if (window.settings.fixedChar === char) {
      window.settings.fixedChar = '';
      this.setState({message: '取消固定字: ' + char});
    } else {
      window.settings.fixedChar = char;
      this.setState({message: '固定字: ' + char});
    }
    this.setState({showMessage: true});
    window.updateLocalStorage();
    window.settingsChange();
  }

  messageOff = () => {
    this.setState({showMessage: false});
  }

  verboseOff = () => {
    this.setState({verbose: false});
    window.settings.verbose = false;
    window.updateLocalStorage();
  }

  renderTitle = () => {
    if (this.state.message && this.state.showMessage)
      return <h4 className='message theme'>{this.state.message}</h4>;
    if (!this.state.verbose)
      return <h1>宝宝起名灵感发生器</h1>;
    if (this.state.lastRating === 1)
      return <p>{this.state.lastName} 将不再展示给其他用户。<a onClick={this.verboseOff}>知道了</a></p>;
    else
      return <p></p>;
  }

  render() {
    return (
      <div className="home">
        <Header leftIcon={<Hamburger/>} leftLink='/menu' title={this.renderTitle()} rightIcon={<Gear />} rightLink='/settings' headingLevel={6}/>
        <Name nameObj={this.props.nameObj} displayName={this.props.nameObj.name? this.displayName() : '加载中...'} undo={this.props.undo} toggleRef={this.toggleRef} isRefShown={this.state.isRefShown}/>
        <Choices collapseRef={this.collapseRef} submit={this.props.submit} nameObj={this.props.nameObj} messageOff={this.messageOff} updateLastRating={this.updateLastRating}/>
      </div>
    );
  }
}

export default Home;
