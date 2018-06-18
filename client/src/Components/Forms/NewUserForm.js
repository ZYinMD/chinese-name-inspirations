import React, { Component } from 'react';
import Header from '../../Components/Header';
import Back from 'react-icons/lib/md/navigate-before';
import './Forms.css';


/*
pseudocode:
app.js:
  will mount:
    if !localStorage
      window.settings = {
        姓: '尹',
        allowed: [],
        mandate出处: false,
        username: '游客',
        verbose: true,
        newUser: true
      };
    window.updateLocalStorage();

  state = {
    newUser: window.settings.newUser,
  }

  after mount:
    console.log(this.state.newUser) //看看will mount是否在state设定之前

  render:
    if (this.state.newUser)
      render newUserForm
    else
      render home

newUserForm:
  姓=window.settings.姓
  username=window.settings.username
  on click 确定:
    window.settings.姓 = 姓
    window.settings.username = username
    window.settings.newUser = false
    window.updateLocalStorage();
    this.props.noLongerNewUser();


*/
class NewUserForm extends Component {
  state = {
    newUser: false,
    姓: window.settings.姓,
    username: window.settings.username,
  }

  submit = () => {
    window.settings.姓 = this.state.姓;
    window.settings.username = this.state.username;
    window.settings.newUser = false;
    window.updateLocalStorage();
    this.props.noLongerNewUser();
  }

  handleInputChange姓 = event => {
    const { value } = event.target;
    if (value.length > 1) {
      this.setState({复姓提醒: true})
    }
    this.setState({姓: value.slice(-1)});
  }

  handleInputChangeUsername = event => {
    const { value } = event.target;
    this.setState({username: value});
  }

  render() {
    return (
      <div className='new-user-form'>
        <h3 className='welcome' style={{color: '#2bb'}}>欢迎使用【宝宝起名灵感发生器】! </h3>
        <h4>你的昵称: </h4>
        <form><input type="text" autoFocus value = {this.state.username} onChange={this.handleInputChangeUsername} /></form>
        <h4>宝宝的姓: </h4>
        <form><input type="text" value = {this.state.姓} onChange={this.handleInputChange姓} /></form>
        {this.state.复姓提醒? <h4>由于排版问题, 目前暂不支持复姓, 请见谅</h4> : null}
        <h4>质量承诺: <br/>每天刷1000个名字, 不出3天, 保证解决你的起名难题! </h4>
        <h4>如果3天还没解决, 那就再来3天! </h4>
        <p className='submit' onClick={this.submit}>开始</p>
      </div>
    );
  }
}
export default NewUserForm;

