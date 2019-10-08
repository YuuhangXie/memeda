import React, { Component } from 'react'

import Avatar1 from 'images/period/avatar1.png'
import Back from 'images/gift/back.png'

import {HomeContainer} from './StyledHome'

export default class Home extends Component {
  clickHandler() {
    this.props.history.goBack()
  }

  clickHandle(){
    this.props.history.push("/memeda/period/setting")
  }

  render() {
    return (
      <HomeContainer>
        <div className="period-container">
          <div className="header-container">
            <div className="back" onClick={() => this.clickHandler()}>
              <img src={Back} alt="返回" />
            </div>
            <span className="title">小姨妈</span>
            <span className="setting" onClick={()=> this.clickHandle()}>设置</span>
          </div>

          <div className="period-body">
            <div className="avatar">
              <img src={Avatar1} alt="姨妈走了" />
            </div>
            <span className="welcome">欢迎进入小姨妈</span>
            <div className="tip">点击设置可以记录您的信息呦！</div>
          </div>
        </div>
      </HomeContainer>
      
    )
  }
}
