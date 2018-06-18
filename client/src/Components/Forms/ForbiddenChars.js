import React, { Component } from 'react';
import Header from '../../Components/Header';
import Back from 'react-icons/lib/md/navigate-before';
import './Forms.css';

class ForbiddenChars extends Component {
  state = {
    forbiddenChars: window.settings.forbiddenChars,
  }

  handleFocus = event => { // select the text on load
    event.target.select();
  }

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({forbiddenChars: value.slice(-255)});
    window.settings.forbiddenChars = value.slice(-255);
    window.updateLocalStorage();
    window.checkForbiddenChars();
  };
  render() {
    return (
      <div className='forbidden-chars'>
        <Header leftIcon={<Back/>} leftLink={'/settings'} title={'禁用的字'} headingLevel={3}/>
        <h4>如需避免使用某些字(例如爸爸妈妈的名字), 可在此指定: </h4>
        <form><input type="text" autoFocus value = {this.state.forbiddenChars} onFocus={this.handleFocus} onChange={this.handleInputChange} /></form>
        <h4>可用任意标点分隔, 也可不分割。最多255个字符。</h4>
      </div>
    );
  }
}
export default ForbiddenChars;

