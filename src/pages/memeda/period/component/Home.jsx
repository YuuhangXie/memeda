import React, { Component } from 'react'

import Avatar1 from 'images/period/avatar1.png'
import Avatar2 from 'images/period/avatar2.png'
import Back from 'images/gift/back.png'

import {HomeContainer} from './StyledHome'
import storage from 'utils/storage.js'

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      date : '',
      distance :''
    }
  }
  
  async componentDidMount() {
    let result = storage.get('period')

    console.log(result)

    if(result) {
      this.setState({
        date: result.lasttime,
        distance: result.distance
      })
    }

  }

  clickHandler() {
    this.props.history.goBack()
  }

  clickHandle(){
    this.props.history.push("/memeda/period/setting")
  }

  click2Handler() {
    this.props.history.push("/index/home")
  }

  click2chat() {
    this.props.history.push("/memeda/chat/home", {msg: '姨妈来了，对我好点哦！'})
  }

  render() {
    return (
      this.state.date.length === 0 ? 

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

      :

      <HomeContainer>
        <div className="period-container">
          <div className="header-container">
            <div className="back" onClick={() => this.click2Handler()}>
              <img src={Back} alt="返回" />
            </div>
            <span className="title">小姨妈</span>
            <span className="setting" onClick={()=> this.clickHandle()}>设置</span>
          </div>

          <div className="period-body">
            <div className="avatar">
              <img src={Avatar2} alt="姨妈来了" />
            </div>
            <span className="welcome">倒计时：{this.state.distance}天</span>
            <div className="tip">最近一次来姨妈 {this.state.date}</div>
            <button onClick={()=> this.click2chat()}>告诉他，姨妈提前来了</button>
          </div>
        </div>
      </HomeContainer>
    )
  }
}
