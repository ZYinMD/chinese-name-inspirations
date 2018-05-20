import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home/';
import Menu from './Pages/Menu/';
import Settings from './Pages/Settings/';
const queue = [];
var pointer = 0;
/*
pseudocode:
on load:
  replenish;
  load settings from localStorage
updateDisplay:
  set state.display to queue[pointer];
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
/*
  state = {
    display: '加载中...',
    // settings: {};
  }

  componentDidMount() {
    this.replenish();
    // load settings from localStorage into this.state.settings;
  }

  updateDisplay() {
    this.setState({display: queue[pointer]});
  }

  submit() {
    pointer++;
    this.updateDisplay();
    // POST db;
    this.replenish();
  }

  replenish() {
    var remaining = queue.length - pointer;
    if (remaining <= 15 && remaining % 5 == 0) {
      // grab another bunch;
      // queue.concat(res);
      this.updateDisplay();
    }

  undo() {
    pointer--;
    this.updateDisplay();
  }

*/
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/settings" component={Settings} />
          <Route path="/menu" component={Menu} />
          <Route path="/" render={()=><Home name={'风起'}/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
