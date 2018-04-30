import React, { Component } from 'react';
import './App.css';
import Char from './Components/Char';
import Choice from './Components/Choice';
class App extends Component {
  state = {
      char: {},
      chosen: new Set([]),
    };

  componentDidMount() {
    this.newChar();
    document.addEventListener("keydown", this.onKeyDownNative); // a native event listener to handle keyboard event
  }

  onKeyDownNative = event => {
    switch (event.key) {
      case 'q':
        this.toggleLabel('很土');
        break;
      case 'w':
        this.toggleLabel('很俗');
        break;
      case 'e':
        this.toggleLabel('很怪');
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
      case '7':
        this.toggleLabel('生僻');
        break;
      case '8':
        this.toggleLabel('多音字');
        break;
      case '9':
        this.toggleLabel('不适用于人名');
        break;
      case '1':
        this.toggleLabel('略生僻');
        break;
      case '2':
        this.toggleLabel('女孩用');
        break;
      case '3':
        this.toggleLabel('禁用');
        break;
      case '0':
        this.toggleLabel('优先');
        break;
      case '.':
        this.toggleLabel('正常');
        break;
      case 'Enter':
        this.submit();
        break;
      default:
    }
  }

  newChar = async () => {
    try {
      var res = await fetch('/api/char/eval');
      var char = await res.json();
      if (res.status !== 200) throw Error(char.message);
      this.setState({char});
    }
    catch(error) {
      console.error(error);
    }
  }
  toggleClick = event => { // this function changes a label's color on click
    this.toggleLabel(event.target.innerText); // this is the text of the choice clicked
   }

  toggleLabel = label => { // this function changes a label's color
    var _chosen = new Set(this.state.chosen); // make a copy of current state
    if (_chosen.has(label)) _chosen.delete(label);
    else _chosen.add(label);
    this.setState({chosen: _chosen});
  }

  submit = () => {
    console.log(this.state);

  }

  render () {
    return (
      <div>
        <Char char={this.state.char}/>
        <div className="choices" >
          <h3>否决</h3>
          <ul>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('生僻')}>生僻</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('多音字')}>多音字</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('不适用于人名')}>不适用于人名</Choice>
          </ul>
          <h3>标签</h3>
          <ul>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('很土')}>很土</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('很俗')}>很俗</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('很怪')}>很怪</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('略土')}>略土</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('略俗')}>略俗</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('略怪')}>略怪</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('略生僻')}>略生僻</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('女孩用')}>女孩用</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('禁用')}>禁用</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('优先')}>优先</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('正常')}>正常</Choice>
          </ul>
        </div>
      </div>
    );
  }
}


export default App;
