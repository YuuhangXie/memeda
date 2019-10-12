import React, { Component } from 'react'

import {HomeContainer } from './StyledHome'

import Back from 'images/gift/back.png'
import Setting from 'images/chat/setting.png'
import Voice from 'images/chat/voice.png'
import Emoji from 'images/chat/emoji.png'
import Picture from 'images/chat/picture.png'
import History from 'images/chat/history.png'
import Background from 'images/chat/background.png'

export default class ChatContainer extends Component {
  constructor() {
    super()
    this.state = {
      hide : true
    }
  }


  clickHandle() {
    this.setState({
      hide : !this.state.hide
    })
  }
  
  clickHandler() {
    this.props.history.goBack()
  }

  GotoHis() {
    this.props.history.push('/memeda/chat/history')
  }

  GotoBac() {
    this.props.history.push('/memeda/chat/background')
  }

  render() {
    return (
      <HomeContainer>
        <div className="chat-container">
          <div className={this.state.hide ? "hidden" : "settings-container"}>
            <div className="settings">
              <div className="history" onClick={()=> this.GotoHis()}>
                <img src={History} alt="甜蜜记录"/>
                <div>甜蜜记录</div> 
              </div>
              <div className="background" onClick={()=> this.GotoBac()}>
                <img src={Background} alt="修改背景"/>
                <div>修改背景</div>
              </div>
            </div>

          </div>

          <div className="header-container">
            <div className="back" onClick={() => this.clickHandler()}>
              <img src={Back} alt="返回" />
            </div>
            <span className="title">颖宝</span>
            <div className="setting" onClick={() => this.clickHandle()}>
              <img src={Setting} alt="设置" />
            </div>
          </div>

          <div className="chat-body">
            <div className="chatting">
              chat
            </div>
            <div className="inputting">
              <div className="voice">
                <img src={Voice} alt="语音"/>
              </div>
              <div className="inputs">
                <input type="text"/>
              </div>
              <div className="emoji">
                <img src={Emoji} alt="表情"/>
              </div>
              <div className="picture">
                <img src={Picture} alt="图片"/>
              </div>
            </div>
          </div>
        </div>
        
        
      </HomeContainer>
    )
  }
}
