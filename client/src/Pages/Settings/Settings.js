import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/Header';
import {List, ListSection, Li} from '../../Components/List';
import Toggle from '../../Components/Toggle';
import Back from 'react-icons/lib/md/navigate-before';
import Expand from 'react-icons/lib/md/navigate-next';
import Article from '../../Components/Article/Article.js';
import 很土的字 from '../../Articles/很土的字.js';

class Settings extends Component {
  render() {
    return (
      <div>
        <Header>
          <Link to='./'><Back className='icon'/></Link>
          <h1>设置</h1>
          <span className='placeholder'>foo</span>
        </Header>
        <List>
          <ListSection>
            <Li>修改宝宝的姓<Expand /></Li>
            <Li>隐藏姓, 只显示名<Toggle /></Li>
          </ListSection>
          <ListSection>
            <Li>固定一字<Toggle /></Li>
          </ListSection>
          <ListSection>
            <Li>修改我的用户名<Expand /></Li>
          </ListSection>
          <ListSection>
            <Li>只使用有出处的名字<Toggle checked={window.settings.mandate出处} setting={'mandate出处'}/></Li>
          </ListSection>
          <ListSection>
            <Li>允许只适用于女孩的字<Toggle checked={window.settings.allowed.includes('女孩用')} label={'女孩用'}/></Li>
            <Li>允许只适用于男孩的字<Toggle checked={window.settings.allowed.includes('男孩用')} label={'男孩用'}/></Li>
          </ListSection>
          <ListSection>
            <Li>允许很土的字<Toggle checked={window.settings.allowed.includes('很土')} label={'很土'}/></Li>
            <Li>允许略土的字<Toggle checked={window.settings.allowed.includes('略土')} label={'略土'}/></Li>
            <Li>允许很俗的字<Toggle checked={window.settings.allowed.includes('很俗')} label={'很俗'}/></Li>
            <Li>允许略俗的字<Toggle checked={window.settings.allowed.includes('略俗')} label={'略俗'}/></Li>
            <Li>允许常见于人名, 但很无趣的字<Toggle checked={window.settings.allowed.includes('无趣')} label={'无趣'}/></Li>
            <Li>允许略生僻的字<Toggle checked={window.settings.allowed.includes('生僻')} label={'生僻'}/></Li>
            <Li>允许比较难搭配的字<Toggle checked={window.settings.allowed.includes('略怪')} label={'略怪'}/></Li>
            <Li>允许非常难搭配的字<Toggle checked={window.settings.allowed.includes('很怪')} label={'很怪'}/></Li>
            <Li>允许多音字<Toggle checked={window.settings.allowed.includes('多音字')} label={'多音字'}/></Li>
          </ListSection>
        </List>
      <Article parent={'/settings'} title={'很土的字'} content={<很土的字/>}/>
      </div>
    );
  }
}
export default Settings;
