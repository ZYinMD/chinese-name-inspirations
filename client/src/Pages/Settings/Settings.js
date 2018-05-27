import React, { Component } from 'react';
import './Settings.css';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import {List, ListSection, Li} from '../../Components/List';
import Toggle from '../../Components/Toggle';
import Back from 'react-icons/lib/md/navigate-before';
import Expand from 'react-icons/lib/md/navigate-next';


class Settings extends Component {
  render() {
    return (
      <div className='settings'>
        <Header leftIcon={<Back/>} leftLink='./' title='设置' headingLevel={2}/>
        <List>
          <ListSection>
            <Link to='./settings/修改姓'><Li>修改宝宝的姓<Expand/></Li></Link>
            <Li>修改我的昵称<Expand/></Li>
          </ListSection>
          <ListSection>
            <Link to='./settings/固定一字'><Li>固定一字<Expand/></Li></Link>
          </ListSection>
          <ListSection>
            <Li>优先展示有出处的名字<Toggle checked={window.settings.mandate出处} setting={'mandate出处'}/></Li>
          </ListSection>
          <ListSection>
            <Li>
              <span className='label'>允许<Link to='./settings/只适合女孩的字'>只适合女孩的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('女孩用')} label={'女孩用'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/只适合男孩的字'>只适合男孩的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('男孩用')} label={'男孩用'}/>
            </Li>
          </ListSection>
          <ListSection>
            <Li>
              <span className='label'>允许<Link to='./settings/很土的字'>很土的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('很土')} label={'很土'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/略土的字'>略土的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('略土')} label={'略土'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/很俗的字'>很俗的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('很俗')} label={'很俗'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/略俗的字'>略俗的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('略俗')} label={'略俗'}/>
            </Li>
            <Li>
              <span className='label'>允许常见于人名, 但<Link to='./settings/无趣的字'>无趣的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('无趣')} label={'无趣'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/玉类'>玉类</Link></span>
              <Toggle checked={window.settings.allowed.includes('玉类')} label={'玉类'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/略生僻的字'>略生僻的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('略生僻')} label={'略生僻'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/难搭配的字'>比较难搭配的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('略怪')} label={'略怪'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/非常难搭配的字'>非常难搭配的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('很怪')} label={'很怪'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/多音字'>多音字</Link></span>
              <Toggle checked={window.settings.allowed.includes('多音字')} label={'多音字'}/>
            </Li>
            <Li disabled>
              <span className='label'>允许<Link to='./settings/正常的字'>正常的字</Link></span>
              <Toggle disabled checked/>
            </Li>
            <Li disabled>
              <span className='label'>允许<Link to='./settings/清奇的字'>清奇的字</Link></span>
              <Toggle disabled checked/>
            </Li>
            <Li disabled>
              <span className='label'>允许<Link to='./settings/作者喜欢的字'>作者喜欢的字</Link></span>
              <Toggle disabled checked/>
            </Li>
            <Li disabled>
              <span className='label'>允许<Link to='./settings/不适用于人名的字'>不适用于人名的字</Link></span>
              <Toggle disabled checked={window.settings.allowed.includes('不适用于人名')} label={'不适用于人名'}/>
            </Li>
            <Li disabled>
              <span className='label'>允许<Link to='./settings/很生僻的字'>很生僻的字</Link></span>
              <Toggle disabled checked={window.settings.allowed.includes('很生僻')} label={'很生僻'}/>
            </Li>
            <Li disabled>
              <span className='label'>允许<Link to='./settings/第三级字表的字'>第三级字表的字</Link></span>
              <Toggle disabled checked={window.settings.allowed.includes('第三级字表')} label={'第三级字表'}/>
            </Li>
          </ListSection>
        </List>
      </div>
    );
  }
}

export default Settings;
