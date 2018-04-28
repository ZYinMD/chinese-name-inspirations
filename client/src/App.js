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
  toggleClick = (event) => {
    var _chosen = new Set(this.state.chosen); // make a copy
    var clicked = event.target.innerText; // this is the text of the choice clicked
    if (_chosen.has(clicked)) _chosen.delete(clicked);
    else _chosen.add(clicked);
    this.setState({chosen:_chosen});
  }
  render () {
    return (
      <div>
        <Char char={this.state.char}/>
        <div className="choices">
          <h3>否决</h3>
          <ul>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('生僻')}>生僻</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('多音字')}>多音字</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('不适用于人名')}>不适用于人名</Choice>
          </ul>
          <h3>标签</h3>
          <ul>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('优先')}>优先</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('正常')}>正常</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('很土')}>很土</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('略土')}>略土</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('很俗')}>很俗</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('略俗')}>略俗</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('很怪')}>很怪</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('略怪')}>略怪</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('女孩用: ')}>女孩用: </Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('略生僻')}>略生僻</Choice>
            <Choice onClick={this.toggleClick} chosen={this.state.chosen.has('禁用')}>禁用</Choice>
          </ul>
        </div>
      </div>
    );
  }
}


export default App;
