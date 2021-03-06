import React, { Component } from 'react';
import './App.css';
import Char from './Components/Char';
import Choice from './Components/Choice';
import axios from 'axios';
var queue = [];
var pointer = 0;
/*
pseudocode:
on load:
  replenish
on submit:
  pointer++;
  set state.char to queue[pointer];
  set state.chosen to new Set([]);
  update db
  replenish;
replenish:
  let remaining = queue.length - pointer;
  if (remaining <= 15 && remaining % 5 == 0) {
    grab another 30;
    queue.concat(res);
    set state.char to queue[pointer];
  }
undo:
  pointer--;
  set state.char to queue[pointer];
  set state.chosen to new Set([]);
*/

class App extends Component {
  state = {
      char: {},
      chosen: new Set([]),
    };

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDownNative); // a native event listener to handle keyboard event
    this.replenish();
  }

  undo = () => {
    console.log('undo');
    pointer--;
    this.setState({
      char: queue[pointer],
      chosen: new Set([])
    });

  }
  submit = () => {
    this.submitEval();
    pointer++;
    this.setState({
      char: queue[pointer],
      chosen: new Set([])
    });
    this.replenish();
  }

  submitEval = async () => {
    let _id = this.state.char._id;
    let char = this.state.char.char;
    let labels = [...this.state.chosen];
    try {
      let res = await axios.post('/api/char', {_id, labels, char});
      console.log(`${res.data}, Queue ${pointer}/${queue.length}`);
    }
    catch(error) {
      console.error(error);
    }
  }
  replenish = async () => {
    let remaining = queue.length - pointer;
    if (remaining > 4 || remaining % 2 !== 0) return; // if remaining <= 15 and divisible by 5,  then get more
    try {
      var res = await fetch('/api/char/eval');
      var additions = await res.json();
      if (res.status !== 200) throw Error(res.message);
      queue = queue.concat(additions);
      this.setState({char: queue[pointer]});
    }
    catch(error) {
      console.error(error);
    }
  }

  onKeyDownNative = event => {
    switch (event.key) {
      case 'u':
        this.toggleLabel('玉类');
        break;
      case 'i':
        this.toggleLabel('必须组成词语');
        break;
      case 'o':
        this.toggleLabel('男孩用');
        break;
      case 'p':
        this.toggleLabel('无趣');
        break;
      case 'q':
        this.toggleLabel('很土');
        break;
      case 'w':
        this.toggleLabel('很俗');
        break;
      case 'e':
        this.toggleLabel('很怪');
        break;
      case 'r':
        this.toggleLabel('禁用');
        break;
      case 'a':
        this.toggleLabel('略土');
        break;
      case 's':
        this.toggleLabel('略俗');
        break;
      case 'd':
        this.toggleLabel('略怪');
        break;
      case 'f':
        this.toggleLabel('略生僻');
        break;
      case 'z':
        this.toggleLabel('女孩用');
        break;
      case 'x':
        this.toggleLabel('普通');
        break;
      case 'c':
        this.toggleLabel('有意思');
        break;
      case 'v':
        this.toggleLabel('优先');
        break;
      case 'j':
        this.toggleLabel('很生僻');
        break;
      case 'k':
        this.toggleLabel('多音字');
        break;
      case 'l':
        this.toggleLabel('不适用于人名');
        break;
      case ';':
        this.submit();
        break;
      case 'Left':
        this.undo();
        break;
      default:
    }
  }

  handleClick = event => { // this function fires when a label is clicked
    this.toggleLabel(event.target.innerText); // this is the text of the choice clicked
   }

  toggleLabel = label => { // this function changes a label's color
    var _chosen = new Set(this.state.chosen); // make a copy of current state
    if (_chosen.has(label)) _chosen.delete(label);
    else _chosen.add(label);
    this.setState({chosen: _chosen});
  }

  render () {
    return (
      <div>
        <Char char={this.state.char}/>
        <div className="choices" >
          <div className="left">
            <h3>标签</h3>
            <ul>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('很土')}>很土</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('很俗')}>很俗</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('很怪')}>很怪</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('禁用')}>禁用</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('略土')}>略土</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('略俗')}>略俗</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('略怪')}>略怪</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('略生僻')}>略生僻</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('女孩用')}>女孩用</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('普通')}>普通</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('有意思')}>有意思</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('优先')}>优先</Choice>
            </ul>
          </div>
          <div className="right">
            <h3>特殊</h3>
            <ul>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('玉类')}>玉类</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('必须组成词语')}>必须组成词语</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('男孩用')}>男孩用</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('无趣')}>无趣</Choice>
            </ul>
            <h3>否决</h3>
            <ul>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('很生僻')}>很生僻</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('多音字')}>多音字</Choice>
              <Choice onClick={this.handleClick} chosen={this.state.chosen.has('不适用于人名')}>不适用于人名</Choice>
            </ul>
            <h3><button onClick={this.undo}>撤销</button></h3>
            <h3><button onClick={this.submit}>提交</button></h3>

          </div>

        </div>
      </div>
    );
  }
}


export default App;
