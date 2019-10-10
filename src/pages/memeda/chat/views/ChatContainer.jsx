import React, { Component } from 'react'

import {ChattingCon} from './StyledChat'

export default class ChatContainer extends Component {
  render() {
    return (
      <ChattingCon>
        <div className="chat-container">
          <div className="header-container">
            <div className="back" onClick={() => this.clickHandler()}>
              <img src="" alt="返回" />
            </div>
            <span className="title">小姨妈</span>
          </div>
        </div>
        
        <div className="chat-body">
  chat
        </div>
      </ChattingCon>
    )
  }
}
