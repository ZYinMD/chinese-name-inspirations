import React, { Component } from 'react';
import './Forms.css';



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
    if (value.length > 1)
      this.setState({复姓提醒: true});
    else
      this.setState({复姓提醒: false});
    this.setState({姓: value.slice(-1)});
  }

  handleInputChangeUsername = event => {
    const { value } = event.target;
    this.setState({username: value});
  }

  render() {
    return (
      <div className='new-user-form'>
        <h3 className='welcome' style={{color: '#2bb'}}>欢迎来到【宝宝起名灵感发生器】内测! </h3>
        <h4>质量承诺: <br/>每天刷1000个名字, 不出3天, 保证解决你的起名问题! </h4>
        <h4>如果3天还没解决, 那就再来3天! </h4>
        <h4>你的昵称: </h4>
        <form><input type="text" autoFocus value = {this.state.username} onChange={this.handleInputChangeUsername} /></form>
        <h4>宝宝的姓: </h4>
        <form><input type="text" value = {this.state.姓} onChange={this.handleInputChange姓} /></form>
        {this.state.复姓提醒? <h4>由于排版问题, 目前暂不支持复姓, 请见谅</h4> : null}
        <p className='submit' onClick={this.submit}>开始</p>
      </div>
    );
  }
}
export default NewUserForm;

