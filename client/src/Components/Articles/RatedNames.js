import React, { Component } from 'react';
import Header from '../Header/';
import Back from 'react-icons/lib/md/navigate-before';
import Heart from 'react-icons/lib/io/android-favorite-outline';
import Bulb from 'react-icons/lib/io/android-bulb';
import './Articles.css';
import axios from 'axios';
import parseDateFromMongo_id from '../Util/parseDateFromMongo_id.js';


class RatedNames extends Component {
  state = {
    message: '加载中...'
  }

  componentDidMount() {
    axios.get('/api/opinions', {
      params: {rating: this.props.rating}
    }).then(res => {
      this.setState({content: res.data});
    }).catch(error => {
      this.setState({message: '加载失败: ' + error});
    });
  }

  title = () => {
    switch (this.props.rating) {
      case 3:
        return (<span>已标 <Bulb style={{paddingBottom: '0.3em'}}/> 的名字</span>);
      default:
        return (<span>已标 <Heart style={{paddingBottom: '0.2em'}}/> 的名字</span>);
    }
  }

  render() {
    return (
      <div className='rated-names'>
        <Header leftIcon={<Back/>} leftLink={'/Menu'} title={this.title()} headingLevel={3}/>
        <table>
          <thead>
            <tr>
              <th>名</th>
              <th>执行人</th>
              <th>执行时间</th>
            </tr>
          </thead>
          <tbody>
            {this.state.content ?
              this.state.content.map((element, index) => (
                <tr key={index}>
                  <td>{element.familyName + element.name} / {element.familyName + element.name[1] + element.name[0]}</td>
                  <td>{element.username}</td>
                  <td>{parseDateFromMongo_id(element._id)}</td>
                </tr>
              ))
              : <tr><td>{this.state.message}</td></tr>}
          </tbody>
        </table>
      </div>
    );
  }
}
export default RatedNames;
