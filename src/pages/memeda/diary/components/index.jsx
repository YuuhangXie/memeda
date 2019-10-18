import React, { Component } from 'react'

import { findDOMNode }  from 'react-dom'

import Back from 'images/gift/back.png'
import {
    DiaryContainer,
    LineContainer
} from '../view/StyledDiary'

import ApiService from 'utils/api.service.js'
import storage from 'utils/storage.js'
import { PullToRefresh } from 'antd-mobile';
import connect from './connect'
import _ from 'lodash'

@connect
class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            diaryList: [],
            userList: []
        };
    }

  async componentDidMount() {
      let result = await ApiService.get('/diarycontent')
      this.setState({
          diaryList: result,
          userList: await ApiService.get('/userlist')
      })
      storage.set('diaryContent', result)

      const hei = this.state.height - findDOMNode(this.ptr).offsetTop;
        setTimeout(() => this.setState({
            height: hei,
            data: _.reverse(this.state.diaryList),
        }), 0);
  }

  clickHandler(index) {
      this.props.getDiaryIndex(index)
      this.props.history.push('/memeda/diary/detail?' + index)
      
  }

  render() {
    return (
        <DiaryContainer>
            <div className="diary-container">
                <div className="header-container">
                    <div className="back" onClick={() => this.props.history.push('/index/home')}>
                    <img src={Back} alt="返回"/>
                    </div>
                    <span className="title">日记本</span>
                    <div className="addTip" onClick={() => {this.props.history.push('/memeda/diary/add')}}>
                        <div className="vertical-box"></div>
                        <div className="transverse-box"></div>
                    </div>
                </div>
                <PullToRefresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
                    height: this.state.height,
                    overflow: 'auto',
                    }}
                    indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                    direction={this.state.down ? 'down' : 'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                    this.setState({ refreshing: true });
                    setTimeout(() => {
                        this.setState({ refreshing: false });
                    }, 1000);
                    }}
                >
                    {_.map(this.state.diaryList, (value, index) => {
                        console.log(value,index)
                            return(
                                <div className="diary-box" onClick={() => this.clickHandler(index)} key={value.id}>
                                    <div className="word-content">
                                        <div className="user-message">
                                            <div className="avatar">
                                                <img src={this.state.userList[1].head_img} alt="头像"/>
                                            </div>
                                            <div className="diary-date">{value.date}</div>
                                        </div>
                                        <div className="diary-content">{value.content}</div>
                                    </div>
                                    <LineContainer>
                                        <div className="line"></div>
                                    </LineContainer>
                                </div>
                            )
                        })}
                </PullToRefresh>
            </div>    
        </DiaryContainer>
    )
  }
}

export default Diary