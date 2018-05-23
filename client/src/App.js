import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home/';
import Menu from './Pages/Menu/';
import Settings from './Pages/Settings/';
const queue = [];
var pointer = 0;
window.settings = {
  姓: '尹',
  allowed: new Set([])
};

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
      var newBunch = await axios.get('/api/names', {
        params: {
          allowed: [...window.settings.allowed],
          mandate出处: window.settings.mandate出处,
        }
      });
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
    /*
    load settings from localStorage into this.state.settings, pseudocode:
    if LS has chineseNameGeneratorSettgins
      window.setting = LS
    else
      window.setting = {姓: '尹', allowed: new Set([])};

    onToggle:
      change window.setting
      update LS
    */

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
