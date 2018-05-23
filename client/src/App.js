import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home/';
import Menu from './Pages/Menu/';
import Settings from './Pages/Settings/';
const queue = [];
var pointer = 0;
window.updateLocalStorage = () => {
  localStorage.setItem('chineseNameGeneratorSettgins', JSON.stringify(window.settings));
};

class App extends Component {
  state = {
    nameObj: {},
    showRef: false
  }

  UNSAFE_componentWillMount() {
    if (localStorage.chineseNameGeneratorSettgins) {
      window.settings = JSON.parse(localStorage.getItem('chineseNameGeneratorSettgins'));
    } else {
      window.settings = {姓: '尹', allowed: ['多音字'], mandate出处: false};
      window.updateLocalStorage();
    }
  }

  componentDidMount() {
    this.replenish();
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
          allowed: window.settings.allowed,
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
