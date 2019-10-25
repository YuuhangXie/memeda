import React, { Component } from 'react'

import Back from 'images/gift/back.png'

import {
    DiaryContainer
} from '../view/StyledDiary'
import Picture from '../../gift/components/picture'

import ApiService from 'utils/api.service.js'
import storage from 'utils/storage.js'

export default class Home extends Component {
  state = {
      hide: true,
      target_height: ''
  }

  componentDidMount() {
      this.setState({
          target_height: storage.get('target_height')
      })
  }

  async contentPost() {
    if(this.props.location.state.from === 'comm') {
        let userInfo = storage.get('share_info')
        await ApiService.customRequest({
            method: 'post',
            url: '/community/showList',
            'content-type': 'application/json',
            data: {
                "showId": parseInt(Math.random()*1000000),
                "showText": this.refs.textBox.value,
                "showTime": new Date(),
                "likeCount": 0,
                "userId": storage.get('user_id'),
                "@user": userInfo.bind_info.nickname,
                "@userId": userInfo.bind_info.id,
                "commentCount": 0,
                "images": [],
                "user": {
                  "img_url": userInfo.head_img,
                  "kickName": userInfo.nickname,
                  "age": userInfo.age,
                  "sex": userInfo.sex
                }
              }
        })
        this.props.history.go(-1)
    } else {
        let length = storage.get('diaryContent').length + 1
        let date = new Date()
        await ApiService.post('/diarycontent',{ 
            'content': this.refs.textBox.value,
            'date': this.addZero(date.getMonth()+1) + '-' + this.addZero(date.getDate()) + ' ' + this.addZero(date.getHours()) + ':' + this.addZero(date.getMinutes()),
            'id': length + 1
        })
        this.props.history.go(-1)
    }
  }

  addZero(time) {
    return time < 10 ? '0' + time : time
  }

  render() {
    return (
        <DiaryContainer targetHeight={this.state.target_height}>
            <div className="diary-container">
                <div className="header-container">
                    <div className="back"  onClick={() => {this.props.history.go(-1)}}>
                        <img src={Back} alt="返回"/>
                    </div>
                    <div className="diary-icon-box">
                        <span className="keep-btn" onClick={() => this.contentPost(this.refs.textBox.value)}>保存</span>   
                    </div>
                </div>
                <textarea name="content" id="textarea" cols="40" rows="10" ref="textBox" placeholder="记录此刻心情动态"></textarea>
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