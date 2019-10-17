import React, { Component } from 'react'

import { findDOMNode }  from 'react-dom'

import Back from 'images/gift/back.png'
import {
    DiaryContainer,
    LineContainer
} from '../view/StyledDiary'

import ApiService from 'utils/api.service.js'
import { PullToRefresh } from 'antd-mobile';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            diaryList: []
        };
    }

  async componentDidMount() {
      let result = await ApiService.get('/diarycontent')
      this.setState({
          diaryList: result
      })

      const hei = this.state.height - findDOMNode(this.ptr).offsetTop;
        setTimeout(() => this.setState({
            height: hei,
            data: this.state.diaryList,
        }), 0);
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
                    {this.state.diaryList.map((value, index) => {
                            return(
                                <div className="diary-box" key={value.id}>
                                    <div className="word-content">
                                        <div className="user-message">
                                            <div className="avatar">
                                                <img src={value.avatar} alt="头像"/>
                                            </div>
                                            <div className="diary-date">{value.date}</div>
                                        </div>
                                        <div className="diary-content">{value.content}</div>
                                    </div>
                                    <div className="pic-content">
                                        {value.pic !== "" ? <img src={value.pic} alt="用户图片"/> : ""}
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