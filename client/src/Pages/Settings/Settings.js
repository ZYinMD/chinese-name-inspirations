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
            <Link to='./settings/修改我的昵称'><Li>修改我的昵称<Expand/></Li></Link>
          </ListSection>
          <ListSection>
            <Link to='./settings/固定一字'><Li>固定一字<Expand/></Li></Link>
            <Link to='./settings/禁用字'><Li>禁用字<Expand/></Li></Link>
          </ListSection>
          <ListSection>
            <Li>
              <span className='label'>优先展示有出处的名字(<Link to='./settings/不推荐出处'>不推荐</Link>)</span>
              <Toggle checked={window.settings.mandate出处} setting={'mandate出处'}/>
            </Li>
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
              <span className='label'>允许<Link to='./settings/被用得太多的字'>被用得太多的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('很俗')} label={'很俗'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/被用得略多的字'>被用得略多的字</Link></span>
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
              <span className='label'>允许<Link to='./settings/否定或反义'>表否定或反义的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('否定')} label={'否定'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/略生僻的字'>略生僻的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('略生僻')} label={'略生僻'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/不太好用的字'>不太好用的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('难用')} label={'难用'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/很难用的字'>很难用的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('很难用')} label={'很难用'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/多音字'>多音字</Link></span>
              <Toggle checked={window.settings.allowed.includes('多音字')} label={'多音字'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/适用于虚构人名'>只适用于虚构人物的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('不真实')} label={'不真实'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/不大气'>不够大气的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('小气')} label={'小气'}/>
            </Li>
            <Li>
              <span className='label'>允许<Link to='./settings/宽泛的字'>虚无宽泛的字</Link></span>
              <Toggle checked={window.settings.allowed.includes('宽泛')} label={'宽泛'}/>
            </Li>
            <Li disabled>
              <span className='label'>允许<Link to='./settings/无标签的字'>无标签的字</Link></span>
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
