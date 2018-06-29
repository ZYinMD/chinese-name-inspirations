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
            <Link to='./menu/如何使用本软件'>
              <Li>如何使用本软件<Expand/></Li>
            </Link>
          </ListSection>
          <ListSection>
            <Link to='./menu/traps'>
              <Li>给宝宝起名的10个陷阱<Expand/></Li>
            </Link>
          </ListSection>
          <ListSection>
            <Link to='./menu/inspiring'>
              <Li><span>大家标 <Bulb style={{paddingBottom: '0.3em'}}/> 的名字</span><Expand/></Li>
            </Link>
            <Link to='./menu/favorites'>
              <Li><span>大家标 <Heart style={{paddingBottom: '0.2em'}}/> 的名字</span><Expand/></Li>
            </Link>
          </ListSection>
          <ListSection>
            <Link to='./menu/典籍'>
              <Li>典籍<Expand/></Li>
            </Link>
          </ListSection>
          <ListSection>
            <Link to='./menu/关于'>
              <Li>关于本App<Expand/></Li>
            </Link>
          </ListSection>
          <ListSection>
            <Link to='./menu/wall'>
              <Li>留言板<Expand/></Li>
            </Link>
          </ListSection>
        </List>
      </div>
    );
  }
}
export default Menu;
