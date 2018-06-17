import React, { Component } from 'react';
import Header from '../../Components/Header';
import Back from 'react-icons/lib/md/navigate-before';
import './Forms.css';

class EditFamilyName extends Component {
  state = {
    当前姓: window.settings.姓,
  }

  handleFocus = event => { // select the text on load
    event.target.select();
  }

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({当前姓: value.slice(-1)});
    window.settings.姓 = value.slice(-1);
    window.updateLocalStorage();
  };
  render() {
    return (
      <div className='edit-family-name'>
        <Header leftIcon={<Back/>} leftLink={'/settings'} title={'修改宝宝的姓'} headingLevel={3}/>
        <h4>宝宝的姓: </h4>
        <form><input type="text" autoFocus  value = {this.state.当前姓} onFocus={this.handleFocus} onChange={this.handleInputChange} /></form>
      </div>
    );
  }
}
export default EditFamilyName;

