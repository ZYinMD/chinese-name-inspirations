import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/Header';
import {List, ListSection, Li} from '../../Components/List'
import Back from 'react-icons/lib/md/navigate-before';
import Expand from 'react-icons/lib/md/navigate-next';
import Heart from 'react-icons/lib/io/android-favorite-outline';
import Bulb from 'react-icons/lib/io/android-bulb';

class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <Header>
          <Link to='./'><Back className='icon'/></Link>
          <h1>关于起名的种种</h1>
          <span className='placeholder'>foo</span>
        </Header>
        <List>
          <ListSection>
            <Li>给宝宝起名的7个原则<Expand /></Li>
          </ListSection>
          <ListSection>
            <Li><span>已标 <Bulb style={{paddingBottom: '4px'}}/> 的名字</span><Expand /></Li>
            <Li><span>已标 <Heart style={{paddingBottom: '1.5px'}}/> 的名字</span><Expand /></Li>
          </ListSection>
          <ListSection>
            <Li><span>典籍</span><Expand /></Li>
          </ListSection>
          <ListSection>
            <Li><span>关于本App</span><Expand /></Li>
          </ListSection>
        </List>
      </div>
    );
  }
}
export default Menu;
