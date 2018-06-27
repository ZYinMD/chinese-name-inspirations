import React, { Component } from 'react';
import Header from '../../Components/Header';
import Back from 'react-icons/lib/md/navigate-before';
import axios from 'axios';
import './Forms.css';
import parseDateFromMongo_id from '../Util/parseDateFromMongo_id.js';

class Wall extends Component {
  state = {
    button: '提交',
    wall: [],
  }

  submit = async () => {
    var messageBody = document.querySelector('textarea');
    var res = axios.post('/api/wall', {
      author: window.settings.username,
      message: messageBody.value.slice(0, 255)
    });
    this.setState({button: '提交中...'});
    res = await res;
    messageBody.value = '';
    this.setState({button: '提交'});
    let wall = this.state.wall;
    wall.unshift(res.data);
    this.setState({wall});
  }

  componentDidMount() {
    axios.get('/api/wall').then(res => {
      this.setState({wall: res.data});
    }).catch(error => {
      this.setState({errorMessage: '加载失败: ' + error});
    });
  }

  render() {
    return (
      <div className='wall'>
        <Header leftIcon={<Back/>} leftLink={'/menu'} title='留言板' headingLevel={3}/>
        <h4>留言上限255个字符: </h4>
        <textarea autoFocus cols="40" rows="7"></textarea>
        <p className='submit' onClick={this.submit}>{this.state.button}</p>
        {this.state.errorMessage?
          this.state.errorMessage
          :
          this.state.wall.map((i, index) => (
          <dl key={index}>
            <dt>{parseDateFromMongo_id(i._id)} {i.author}:</dt>
            <dd>{i.message}</dd>
          </dl>
        ))}
      </div>
    );
  }
}
export default Wall;

