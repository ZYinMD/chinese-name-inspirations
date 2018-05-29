import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import {List, ListSection, Li} from '../../Components/List';
import Back from 'react-icons/lib/md/navigate-before';
import Expand from 'react-icons/lib/md/navigate-next';
import Heart from 'react-icons/lib/io/android-favorite-outline';
import Bulb from 'react-icons/lib/io/android-bulb';

class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <Header leftIcon={<Back/>} leftLink='./' title='' headingLevel={2}/>
        <List>
          <ListSection>
            <Li>给宝宝起名的7个原则<Expand /></Li>
          </ListSection>
          <ListSection>
            <Link to='./settings/inspiring'>
              <Li><span>大家标 <Bulb style={{paddingBottom: '0.3em'}}/> 的名字</span><Expand/></Li>
            </Link>
            <Link to='./settings/favorites'>
              <Li><span>大家标 <Heart style={{paddingBottom: '0.2em'}}/> 的名字</span><Expand/></Li>
            </Link>
          </ListSection>
          <ListSection>
            <Li><span>参考典籍</span><Expand /></Li>
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
