import React, { Component } from 'react'

import {HomeContainer } from './StyledHome'

import Back from 'images/gift/back.png'
import Setting from 'images/chat/setting.png'
import Voice from 'images/chat/voice.png'
import History from 'images/chat/history.png'
import Background from 'images/chat/background.png'

import Apiservice from 'utils/api.service.js'
import storage from 'utils/storage.js'

export default class ChatContainer extends Component {
  constructor() {
    super()
    this.state = {
      hide : true,
      value : '',
      avatar: {},
      tabList: [],
      userInfo: []
    }
  }

  async componentDidMount() {
    let result = await Apiservice.get('/api/home')
    this.state.userInfo = await Apiservice.get('/userlist')

    storage.set('userMsg', this.state.userInfo)

    this.setState({
      tabList: result.data.tabMsg,
      avatar: result.data.avatar
    })
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

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  sendHandle() {
    storage.set('chats', this.state.value)
    console.log(this.state.value)

    this.setState({
      value: ''
    });
  }

  render() {
    return (
      this.state.userInfo.length === 0 ? null:
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
              <div className="he">
                <div className="avater">
                  <img src={this.state.userInfo[0].head_img} alt="对方头像"/>
                  <div className="hesay">爱你，丽颖</div>
                </div>
              </div>
              <div className="she">
                <div className="avater">
                  <img src={this.state.userInfo[1].head_img} alt="对方头像"/>
                  <div className="shesay">爱你，李健</div>
                </div>
              </div>
            </div>
            <div className="inputting">
              <div className="voice">
                <img src={Voice} alt="语音"/>
              </div>
              <div className="inputs">
                <input type="text" value={this.state.value} onChange={(e)=>this.handleChange(e)}/>
              </div>

              <div className="send" onClick={()=>this.sendHandle()}>
                <button>发送</button>
              </div>
            </div>
          </div>
        </div>
        
        
      </HomeContainer>
    )
  }
}
