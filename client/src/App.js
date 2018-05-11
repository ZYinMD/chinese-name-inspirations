import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import Name from './Components/Name';
import Choices from './Components/Choices';


class App extends Component {
  state = {
    };

  componentDidMount() {
  }

  undo = () => {/*
    console.log('undo');
    pointer--;
    this.setState({
      char: queue[pointer],
      chosen: new Set([])
    });
  */}
  submit = () => {/*
    this.submitEval();
    pointer++;
    this.setState({
      char: queue[pointer],
      chosen: new Set([])
    });
    this.replenish();
  */}

  submitEval = async () => {/*
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
  */}

  replenish = async () => {/*
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
  */}

  handleClick = event => {/* // this function fires when a label is clicked
    this.toggleLabel(event.target.innerText); // this is the text of the choice clicked
   */}

  toggleLabel = label => {/* // this function changes a label's color
    var _chosen = new Set(this.state.chosen); // make a copy of current state
    if (_chosen.has(label)) _chosen.delete(label);
    else _chosen.add(label);
    this.setState({chosen: _chosen});
  */}

  render () {
    return (
      <div>
        <Header/>
        <Name/>
        <Choices/>
      </div>
    );
  }
}


export default App;
