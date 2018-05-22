import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home/';
import Menu from './Pages/Menu/';
import Settings from './Pages/Settings/';
const queue = [];
var pointer = 0;
window.settings = {姓: '尹'};

/*
pseudocode:
on load:
  replenish;
  load settings from localStorage
updateDisplay:
  set state.name to queue[pointer];
on submit:
  pointer++;
  updateDisplay();
  POST db;
  replenish;
replenish:
  let remaining = queue.length - pointer;
  if (remaining <= 15 && remaining % 5 == 0) {
    grab another bunch;
    queue.concat(res);
    updateDisplay();
  }
undo:
  pointer--;
  updateDisplay();
*/
class App extends Component {
  state = {
    nameObj: {},
    showRef: false
  }

  submit = () => {
    pointer++;
    this.updateDisplay();
    this.replenish();
  }

  updateDisplay = () => {
    this.setState({nameObj: queue[pointer]});
  }

  replenish = async () => {
    let remaining = queue.length - pointer;
    if (remaining <= 15 && remaining % 5 === 0) {
      var newBunch = await axios.get('/api/names');
      queue.push(...newBunch.data);
      this.updateDisplay();
    }
  }

  undo = () => {
    if (pointer < 1) return;
    pointer--;
    this.updateDisplay();
  }


  componentDidMount() {
    this.replenish();
    // load settings from localStorage into this.state.settings;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/settings" component={Settings} />
          <Route path="/menu" component={Menu} />
          <Route path="/" render={()=><Home submit={this.submit} nameObj={this.state.nameObj} undo={this.undo}/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
