import React, { Component } from 'react';
import Header from '../../Components/Header';
import Back from 'react-icons/lib/md/navigate-before';
import './Forms.css';

class FixOneChar extends Component {
  state = {
    固定字: window.settings.固定字,
  }

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({固定字: value.slice(-1)});
    window.settings.固定字 = value.slice(-1);
    window.updateLocalStorage();
  };
  render() {
    const 姓 = window.settings.姓;
    return (
      <div className='fix-one-char'>
        <Header leftIcon={<Back/>} leftLink={'/settings'} title={'固定一字'} headingLevel={3}/>
        <h4>若要在名的二字中固定一个 (例如{姓}天算, {姓}天赐, {姓}天意), 在此指定要固定的字:   </h4>
        <form><input type="text" autoFocus value = {this.state.固定字} onChange={this.handleInputChange} /></form>
        <h4>留空则不启用 </h4>
      </div>
    );
  }
}
export default FixOneChar;

