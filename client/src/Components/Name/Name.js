import React, { Component } from 'react';
import './Name.css';
import Ref from './Ref.js';
import Undo from 'react-icons/lib/md/undo';
import Expand from 'react-icons/lib/md/keyboard-arrow-down';
import Collapse from 'react-icons/lib/md/keyboard-arrow-up';


class Expander extends Component {
  render() {
    var style = {};
    if (!this.props.nameObj.ref && !this.props.nameObj.looseRef) {
      style = {color: 'silver'};
    }
    return (
      <span onClick={this.props.onClick} style={style}>{this.props.isRefShown ? <Collapse/> : <Expand/>}</span>
    );
  }
}

class Name extends Component {

  displayName = () => {
    let 名1 = this.props.nameObj.name;
    let 名2 = 名1[1] + 名1[0];
    return window.settings.姓 + 名1 + ' / ' + window.settings.姓 + 名2;
  }

  render() {
    return (
      <div className='name'>
        <div className='name-display'>
          <Undo onClick={this.props.undo}/>
          <h2>{this.props.nameObj.name ? this.displayName() : '加载中...'}</h2>
          <Expander nameObj={this.props.nameObj} isRefShown={this.props.isRefShown} onClick={this.props.toggleRef}/>
        </div>
        {this.props.isRefShown ? <Ref nameObj={this.props.nameObj}/> : null}
      </div>
    );
  }
}

export default Name;
