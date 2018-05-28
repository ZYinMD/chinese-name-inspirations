import React, { Component } from 'react';
import Header from '../../Components/Header';
import Back from 'react-icons/lib/md/navigate-before';
import Heart from 'react-icons/lib/io/android-favorite-outline';
import Bulb from 'react-icons/lib/io/android-bulb';
import './Forms.css';

class EditUsername extends Component {
  state = {
    username: window.settings.username
  }

  handleInputChange = event => {
    var { value } = event.target;
    this.setState({username: value});
    window.settings.username = value || '游客'; // if value is empty, store '游客'
    window.updateLocalStorage();
  }

  render() {
    return (
      <div className='fix-one-char'>
        <Header leftIcon={<Back/>} leftLink={'/settings'} title={'修改我是谁'} headingLevel={3}/>
        <h4>请设置一个昵称, 用于在标<Heart/>和标<Bulb/>时记录执行人</h4>
        <form><input type="text" autoFocus value = {this.state.username} onChange={this.handleInputChange} /></form>
      </div>
    );
  }
}
export default EditUsername;

