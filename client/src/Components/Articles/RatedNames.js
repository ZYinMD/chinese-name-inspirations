import React, { Component } from 'react';
import Header from '../Header/';
import Back from 'react-icons/lib/md/navigate-before';
import Heart from 'react-icons/lib/io/android-favorite-outline';
import Bulb from 'react-icons/lib/io/android-bulb';
import './Articles.css';
import axios from 'axios';


class RatedNames extends Component {
  state = {
    message: '加载中...'
  }

  componentDidMount() {
    console.log('this.props.rating: ', this.props.rating);
    axios.get('../api/opinions', {
      params: {rating: this.props.rating}
    }).then(res => {
      this.setState({content: res.data});
      console.log('res.data: ', res.data);
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

  parseDateFromMongo_id = _id => {
    var date = new Date(parseInt(_id.substring(0, 8), 16) * 1000); // this line was copied from other people's code.
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day =date.getDate();
    return `${year}-${month}-${day}`;
  };

  render() {
    return (
      <div className='rated-names'>
        <Header leftIcon={<Back/>} leftLink={'/Menu'} title={this.title()} headingLevel={3}/>
        <table>
          <tr>
            <th>名</th>
            <th>执行人</th>
            <th>执行时间</th>
          </tr>
            {this.state.content ?
              this.state.content.map((element, index) => (
                <tr key={index}>
                  <td>{element.familyName + element.name} / {element.familyName + element.name[1] + element.name[0]}</td>
                  <td>{element.username}</td>
                  <td>{this.parseDateFromMongo_id(element._id)}</td>
                </tr>
              ))
              : this.state.message}
        </table>
      </div>
    );
  }
}
export default RatedNames;
