import React, { Component } from "react";
import "./Forms.css";

class NewUserForm extends Component {
  state = {
    newUser: false,
    username: "",
  };

  submit = (event) => {
    event.preventDefault();
    if (this.state.username) window.settings.username = this.state.username;
    if (this.state.姓) window.settings.姓 = this.state.姓.slice(-1);
    window.settings.newUser = false;
    window.updateLocalStorage();
    this.props.noLongerNewUser();
  };

  handleInputChange姓 = (event) => {
    const { value } = event.target;
    this.setState({ 姓: value });
  };

  handleInputChangeUsername = (event) => {
    const { value } = event.target;
    this.setState({ username: value });
  };

  render() {
    return (
      <div className="new-user-form">
        <h3 className="welcome" style={{ color: "#2bb" }}>
          欢迎来到【宝宝起名灵感发生器】内测!{" "}
        </h3>
        <h4>
          质量承诺: <br />
          每天刷1000个名字, 不出3天, 保证解决你的起名问题!{" "}
        </h4>
        <h4>如果3天还没解决, 那就再来3天! </h4>
        <h4>你是谁: </h4>
        <form>
          <input
            type="text"
            autoFocus
            value={this.state.username}
            onChange={this.handleInputChangeUsername}
          />
        </form>
        <h4>宝宝的姓: </h4>
        <form onSubmit={this.submit}>
          <input
            type="text"
            value={this.state.姓}
            onChange={this.handleInputChange姓}
          />
        </form>
        <button className="submit" type="submit" onClick={this.submit}>
          开始
        </button>
      </div>
    );
  }
}
export default NewUserForm;
