import React, { Component } from 'react';
// import React from 'react';
import './Name.css';
import Undo from 'react-icons/lib/md/undo';
import Expand from 'react-icons/lib/md/keyboard-arrow-down';
import Collapse from 'react-icons/lib/md/keyboard-arrow-up';

const Expander = props => {
  var style = {};
  if (!props.nameObj.ref && !props.nameObj.looseRef) {
    style = {color: 'silver'};
  }
  return (
    <span onClick={props.onClick} style={style}>{props.showRef ? <Collapse/> : <Expand/>}</span>
  );
};

class Name extends Component {

  state = {
    showRef: false
  }

  displayName = () => {
    let 名1 = this.props.nameObj.name;
    let 名2 = 名1[1] + 名1[0];
    return window.settings.姓 + 名1 + ' / ' + window.settings.姓 + 名2;
  }

  toggleRef = () => {
    this.setState({showRef: !this.state.showRef});
  }

  renderRef = () => {
    var refs = [];
    if (this.props.nameObj.ref) {
      refs.push(...Object.entries(this.props.nameObj.ref))
    }
    if (this.props.nameObj.looseRef) {
      refs.push(...Object.entries(this.props.nameObj.looseRef))
    }
    refs = refs.map(i => i.join(': '));
    var char1 = this.props.nameObj.name[0];
    var char2 = this.props.nameObj.name[1];
    refs.push('可能采用的小名:');
    refs.push(`阿${char1}, 阿${char2}, 小${char1}, 小${char2}, ${char1}${char1}, ${char2}${char2}`);
    refs.push('如果只喊名: ');
    refs.push(`${char1}${char2} / ${char2}${char1}`);

    // var 小名 = `阿${char1}, 阿${char2}, 小${char1}, 小${char2}, ${char1}${char1}, ${char2}${char2}`;
    // var 只喊名 = `${char1}${char2} / ${char2}${char1}`;

    return (
      <div className='ref'>
        {refs.map(i => (<p>{i}</p>))}
      </div>
    );
  }

  render() {
    return (
      <div className='name'>
        <div className='name-display'>
          <Undo onClick={this.props.undo}/>
          <h2>{this.props.nameObj.name ? this.displayName() : '加载中...'}</h2>
          <Expander nameObj={this.props.nameObj} showRef={this.state.showRef} onClick={this.toggleRef}/>
        </div>
        {this.state.showRef ? this.renderRef() : null}
      </div>
    );
  }
}

export default Name;
