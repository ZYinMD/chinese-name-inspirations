import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home/';
import Menu from './Pages/Menu/';
import Settings from './Pages/Settings/';
import ExplainLabels from './Components/Articles/ExplainLabels.js';
import ScrollToTop from './ScrollToTop.js';
import EditFamilyName from './Components/Forms/EditFamilyName.js';
import FixOneChar from './Components/Forms/FixOneChar.js';
import ForbiddenChars from './Components/Forms/ForbiddenChars.js';
import EditUsername from './Components/Forms/EditUsername.js';
import RatedNames from './Components/Articles/RatedNames.js';
import DiscourageSource from './Components/Articles/DiscourageSource.js';
import NewUserForm from './Components/Forms/NewUserForm.js';

var queue = [];
var pointer = 0;
window.opinions = [];
window.updateLocalStorage = () => {
  localStorage.setItem('chineseNameGeneratorSettings', JSON.stringify(window.settings));
};
window.settingsChange = async () => { // when some settings are changed, call this to get new bunch of names
  var newBunchNames = await window.newBunchNames();
  let remaining = queue.length - pointer - 1;
  queue.splice(-remaining);
  queue.push(...newBunchNames);
};

window.checkForbiddenChars = arrayOfNames => { //检查一列名字是否包含有forbiddenChars, 如果包含, 则剔除
  console.log('queue before filter: ', queue);
  if (!arrayOfNames) {
    queue = window.checkForbiddenChars(queue); // 如果没有argument, 则处理一下queue
    return;
  }

  return arrayOfNames.filter(i => (
    (!window.settings.forbiddenChars.includes(i.name[0]) || i.name[0] === window.settings.fixedChar) // 如果一个forbiddenChar恰好是fixedChar, 则允许
    &&
    (!window.settings.forbiddenChars.includes(i.name[1]) || i.name[1] === window.settings.fixedChar)
  ));
};

window.newBunchNames = async () => {
  var newBunchNames = await axios.get('/api/names', {
    params: {
      allowed: window.settings.allowed,
      fixedChar: window.settings.fixedChar,
      mandate出处: window.settings.mandate出处,
      username: window.settings.username,
    }
  });
  return await window.checkForbiddenChars(newBunchNames.data);
};

class App extends Component {
  state = {
    nameObj: {},
    showRef: false,
  }

  UNSAFE_componentWillMount() {
    if (localStorage.chineseNameGeneratorSettings) {
      window.settings = JSON.parse(localStorage.getItem('chineseNameGeneratorSettings'));
      if (!window.settings.forbiddenChars)
        window.settings.forbiddenChars = ''; //历史遗留问题, 有些人的手机在我设定这个forbiddenChars之前已经打开过本页了
    } else {
      window.settings = {
        姓: '尹',
        allowed: [],
        mandate出处: false,
        username: '游客',
        verbose: true,
        newUser: true,
        forbiddenChars: '',
      };
      window.updateLocalStorage();
    }
    this.setState({newUser: window.settings.newUser});
  }

  componentDidMount() {
    this.replenish();
    setInterval(this.postOpinions, 15000);
    console.log('this.state.newUser: ', this.state.newUser);//看看will mount是否在state设定之前
  }

  submit = () => {
    pointer++;
    this.updateDisplay();
    this.replenish();
  }

  postOpinions = () => {
    if (window.opinions.length === 0) return;
    axios.post('/api/names', window.opinions);
    window.opinions = [];
  }

  updateDisplay = () => {
    this.setState({nameObj: queue[pointer]});
  }

  replenish = async () => {
    let remaining = queue.length - pointer;
    if (remaining <= 15 && remaining % 5 === 0) {
      var newBunchNames = await window.newBunchNames();
      queue.push(...newBunchNames);
      this.updateDisplay();
    }
  }

  undo = () => {
    if (pointer < 1) return;
    pointer--;
    this.updateDisplay();
    window.opinions.pop();
  }

  noLongerNewUser = () => {
    this.setState({newUser: false});
  }

  renderHomePage = () => {
    if (this.state.newUser)
      return <NewUserForm noLongerNewUser={this.noLongerNewUser}/>;
    else
      return <Home submit={this.submit} nameObj={this.state.nameObj} undo={this.undo}/>;
  }

  render() {
    return (
      <BrowserRouter><ScrollToTop>
        <Switch>
          <Route path='/settings/inspiring' render={() => <RatedNames rating={3} />} />
          <Route path='/settings/favorites' render={() => <RatedNames rating={4} />} />
          <Route path="/settings/修改姓" component={EditFamilyName} />
          <Route path="/settings/修改我的昵称" component={EditUsername} />
          <Route path="/settings/固定一字" component={FixOneChar} />
          <Route path="/settings/禁用字" component={ForbiddenChars} />
          <Route path="/settings/不推荐出处" component={DiscourageSource} />
          <Route path="/settings/只适合女孩的字" render={()=><ExplainLabels title='只适合女孩的字' displayLabel='只适合女孩用' dbLabel='女孩用'/>}/>
          <Route path="/settings/只适合男孩的字" render={()=><ExplainLabels title='只适合男孩的字' displayLabel='只适合男孩用' dbLabel='男孩用'/>}/>
          <Route path="/settings/很土的字" render={()=><ExplainLabels title='很土的字' displayLabel='很土' dbLabel='很土'/>}/>
          <Route path="/settings/略土的字" render={()=><ExplainLabels title='略土的字' displayLabel='略土' dbLabel='略土'/>}/>
          <Route path="/settings/很俗的字" render={()=><ExplainLabels title='很俗的字' displayLabel='很俗' dbLabel='很俗'/>}/>
          <Route path="/settings/略俗的字" render={()=><ExplainLabels title='略俗的字' displayLabel='略俗' dbLabel='略俗'/>}/>
          <Route path="/settings/无趣的字" render={()=><ExplainLabels title='无趣的字' displayLabel='可用于人名, 但很无趣' dbLabel='无趣'/>}/>
          <Route path="/settings/玉类" render={()=><ExplainLabels title='玉类' displayLabel='玉类' dbLabel='玉类'/>}/>
          <Route path="/settings/否定" render={()=><ExplainLabels title='表否定意义的字' displayLabel='表示否定' dbLabel='否定'/>}/>
          <Route path="/settings/略生僻的字" render={()=><ExplainLabels title='略生僻的字' displayLabel='可以用, 但有些生僻' dbLabel='略生僻'/>}/>
          <Route path="/settings/难搭配的字" render={()=><ExplainLabels title='难搭配的字' displayLabel='人脑可以驾驭, 电脑不行' dbLabel='略怪'/>}/>
          <Route path="/settings/非常难搭配的字" render={()=><ExplainLabels title='非常难搭配的字' displayLabel='某些特殊寓意的名字才会用' dbLabel='很怪'/>}/>
          <Route path="/settings/多音字" render={()=><ExplainLabels title='多音字' displayLabel='多音字' dbLabel='多音字'/>}/>
          <Route path="/settings/正常的字" render={()=><ExplainLabels title='正常的字' displayLabel='正常' dbLabel='普通'/>}/>
          <Route path="/settings/清奇的字" render={()=><ExplainLabels title='清奇的字' displayLabel='清奇' dbLabel='有意思'/>}/>
          <Route path="/settings/作者喜欢的字" render={()=><ExplainLabels title='作者喜欢的字' displayLabel='作者喜欢' dbLabel='优先'/>}/>
          <Route path="/settings/不适用于人名的字" render={()=><ExplainLabels title='不适用于人名的字' displayLabel='不适用于人名' dbLabel='不适用于人名'/>}/>
          <Route path="/settings/很生僻的字" render={()=><ExplainLabels title='很生僻的字' displayLabel='很生僻' dbLabel='很生僻'/>}/>
          <Route path="/settings/第三级字表的字" render={()=><ExplainLabels title='第三级字表的字' displayLabel='第三级字表' dbLabel='第三级字表'/>}/>
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/menu" component={Menu} />
          <Route path="/" render={this.renderHomePage}/>
        </Switch>
      </ScrollToTop></BrowserRouter>
    );
  }
}


export default App;
