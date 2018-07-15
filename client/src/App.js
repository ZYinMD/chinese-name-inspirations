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
import AutoMode from './Components/Articles/AutoMode.js';
import NewUserForm from './Components/Forms/NewUserForm.js';
import Help from './Components/Articles/Help.js';
import Faq from './Components/Articles/Faq.js';
import Reference from './Components/Articles/Reference.js';
import Traps from './Components/Articles/Traps.js';
import Wall from './Components/Forms/Wall.js';

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
  if (!arrayOfNames) {
    queue = window.checkForbiddenChars(queue); // 如果没有argument, 则处理一下queue
    return;
  }

  return arrayOfNames.filter(i => (
    (i.name[0] !== i.name[1]) // remove if two chars are the same. It's not part of "check forbidden chars", but顺便check了
    &&
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
      autoMode: window.settings.autoMode,
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
        allowed: ['小气', '宽泛'],
        mandate出处: false,
        username: '游客' + Math.floor(1000 * Math.random()),
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
      removeDupe(); // sometimes the addition of newBunchNames will introduce some duplicates, remove them
      this.updateDisplay();
    }
    function removeDupe() {
      var justRated = pointer - 5;
      if (justRated <= 0)
        justRated = 0;
      for (let i = justRated; i < queue.length - 1; i++) {
        for (let j = queue.length - 1; j > i; j--)
          if (queue[i].name === queue[j].name)
            queue.splice(j, 1);
      }
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
          <Route path='/menu/inspiring' render={() => <RatedNames rating={3} />} />
          <Route path='/menu/favorites' render={() => <RatedNames rating={4} />} />
          <Route path="/menu/如何使用本软件" component={Help} />
          <Route exact path="/menu/traps" component={Traps} />
          <Route path="/menu/典籍" component={Reference} />
          <Route path="/menu/Wall" component={Wall} />
          <Route path="/menu/faq" component={Faq} />
          <Route path="/settings/修改姓" component={EditFamilyName} />
          <Route path="/settings/修改我的昵称" component={EditUsername} />
          <Route path="/settings/固定一字" component={FixOneChar} />
          <Route path="/settings/禁用字" component={ForbiddenChars} />
          <Route path="/settings/不推荐出处" component={DiscourageSource} />
          <Route path="/settings/只适合女孩的字" render={()=><ExplainLabels title='只适合女孩的字' displayLabel='只适合女孩用' dbLabel='女孩用'/>}/>
          <Route path="/settings/只适合男孩的字" render={()=><ExplainLabels title='只适合男孩的字' displayLabel='只适合男孩用' dbLabel='男孩用'/>}/>
          <Route path="/settings/智能模式" component={AutoMode} />
          <Route path="/settings/略土的字" render={()=><ExplainLabels title='略土的字' displayLabel='略土' dbLabel='略土'/>}/>
          <Route path="/settings/很土的字" render={()=><ExplainLabels title='很土的字' displayLabel='很土' dbLabel='很土'/>}/>
          <Route path="/settings/被用得略多的字" render={()=><ExplainLabels title='被用得有点多的字' displayLabel='被相当多人用过' dbLabel='略俗'/>}/>
          <Route path="/settings/被用得太多的字" render={()=><ExplainLabels title='被用得太多的字' displayLabel='被太多人用过' dbLabel='很俗'/>}/>
          <Route path="/settings/无趣的字" render={()=><ExplainLabels title='无趣的字' displayLabel='适用于人名, 但作者觉得比较无趣' dbLabel='无趣'/>}/>
          <Route path="/settings/玉类" render={()=><ExplainLabels title='玉类' displayLabel='玉类' dbLabel='玉类'/>}/>
          <Route path="/settings/否定或反义" render={()=><ExplainLabels title='表否定或反义的字' displayLabel='否定或反义' dbLabel='否定'/>}/>
          <Route path="/settings/略生僻的字" render={()=><ExplainLabels title='略生僻的字' displayLabel='可以用, 但有些生僻' dbLabel='略生僻'/>}/>
          <Route path="/settings/不太好用的字" render={()=><ExplainLabels title='不太好用的字' displayLabel='手工起名可以驾驭, 电脑不行' dbLabel='难用'/>}/>
          <Route path="/settings/很难用的字" render={()=><ExplainLabels title='很难用的字' displayLabel='很难搭配, 只有某些很特殊的名字才用得到' dbLabel='很难用'/>}/>
          <Route path="/settings/多音字" render={()=><ExplainLabels title='多音字' displayLabel='多音字' dbLabel='多音字'/>}/>
          <Route path="/settings/适用于虚构人名" render={()=><ExplainLabels title='只适用于虚构人物的字' displayLabel='好听, 但似乎只适用于影视文学作品' dbLabel='不真实'/>}/>
          <Route path="/settings/不大气" render={()=><ExplainLabels title='不够大气的字' displayLabel='好听, 但似乎像是小家碧玉, 或者小角色' dbLabel='小气'/>}/>
          <Route path="/settings/宽泛的字" render={()=><ExplainLabels title='虚无宽泛的字' displayLabel='似乎百搭又好听, 却没什么具体意思' dbLabel='宽泛'/>}/>
          <Route path="/settings/无标签的字" render={()=><ExplainLabels title='无标签的字' displayLabel='没有任何标签' dbLabel='无标签'/>}/>
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


