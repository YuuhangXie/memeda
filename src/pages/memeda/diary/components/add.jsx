import React, { Component } from 'react'

import Back from 'images/gift/back.png'

import {
    DiaryContainer
} from '../view/StyledDiary'
import Picture from '../../gift/components/picture'


export default class Home extends Component {
  state = {
      hide: true
  }

  modificationPage(event) {
    event.stopPropagation()
    this.setState({
      hide: !this.state.hide
    })
  }

  render() {
    return (
        <DiaryContainer>
            <div className="diary-container">
                <div className="header-container">
                    <div className="back"  onClick={() => {this.props.history.go(-1)}}>
                        <img src={Back} alt="返回"/>
                    </div>
                    <div className="diary-icon-box">
                        <span className="keep-btn" onClick={() => {this.props.history.push('/memeda/diary/index')}}>保存</span>
                        <div className="carema-box"  onClick={(e) => this.modificationPage(e)}>
                            
                            <img src="http://pz394k5aw.bkt.clouddn.com/%E7%9B%B8%E6%9C%BA%20%5B%E8%BD%AC%E6%8D%A2%5D@3x.png" alt="icon"/>
                        </div>    
                    </div>
                </div>
                <textarea name="content" id="textarea" cols="30" rows="40" placeholder="记录此刻心情动态"></textarea>
                <div className={this.state.hide ? "hideAva" : "gift-component"}>
                    <Picture
                        changeProps={(e) => this.modificationPage(e)}
                        hide={this.state.hide}
                    ></Picture>
                </div>
            </div>        
        </DiaryContainer>    
    )
  }
}