import React, { Component } from 'react'

import { HistoryContainer } from './StyledHistory'
import Back from 'images/gift/back.png'


export default class History extends Component {
  
  clickHandler() {
    this.props.history.goBack()
  }
  
  render() {
    return (
      <HistoryContainer>
         <div className="history-container">
          
          <div className="header-container">
            <div className="back" onClick={() => this.clickHandler()}>
              <img src={Back} alt="返回" />
            </div>
            <span className="title">2019/10/10</span>

          </div>

          <div className="history-body">
            
          </div>
        </div>
        

      </HistoryContainer>
    )
  }
}
