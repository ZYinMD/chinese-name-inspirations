import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/Header';
import {List, ListSection, Li} from '../../Components/List'
import Toggle from '../../Components/Toggle';
import Back from 'react-icons/lib/md/navigate-before';
import Expand from 'react-icons/lib/md/navigate-next';

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
            <Li>只使用有出处的名字<Toggle checked/></Li>
          </ListSection>
          <ListSection>
            <Li>允许只适用于女孩的字<Toggle /></Li>
            <Li>允许只适用于男孩的字<Toggle checked/></Li>
          </ListSection>
          <ListSection>
            <Li>允许很土的字<Toggle /></Li>
            <Li>允许略土的字<Toggle /></Li>
            <Li>允许很俗的字<Toggle /></Li>
            <Li>允许略俗的字<Toggle /></Li>
            <Li>允许常见于人名, 但很无趣的字<Toggle /></Li>
            <Li>允许略生僻的字<Toggle /></Li>
            <Li>允许比较难搭配的字<Toggle /></Li>
            <Li>允许非常难搭配的字<Toggle /></Li>
            <Li>允许多音字<Toggle /></Li>
          </ListSection>
        </List>
      </div>
    );
  }
}
export default Settings;
