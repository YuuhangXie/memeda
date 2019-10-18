import React, { Component } from 'react'

import Back from 'images/gift/back.png'

import storage from 'utils/storage.js'
import ApiService from 'utils/api.service.js'

import {
    DiaryDetailContainer
} from './StyledDetail'

import connect from '../connect'
import _ from 'lodash'

@connect
class Detail extends Component {
  state = {
      diaryContent: storage.get('diaryContent'),
      index: _.split(this.props.location.search, '?')[1],
      timer: null,
      targetContent: _.find(storage.get('diaryContent'),(value) => {
          return Number(value.id) === Number(_.split(this.props.location.search, '?')[1])
      }).content
  }

  async contentDispatch(content) {
    this.setState({
        timer: null
    })
    clearTimeout(this.state.timer)
    this.setState({
        timer: setTimeout(async () => {
            await ApiService.patch('/diarycontent/' + Number(this.state.index),{
                ...this.state.diaryContent[this.state.index],
                content
            })
            storage.set('diaryContent', await ApiService.get('/diarycontent'))
        
            this.setState({
                diaryContent: storage.get('diaryContent')
            })
        }, 500)
    })
  }

  render() {
    return (
        this.state.diaryContent.length === 0 || this.state.index === 'undefined' ? false :
        <DiaryDetailContainer>
            <div className="diary-container">
                <div className="header-container">
                    <div className="back"  onClick={() => {this.props.history.go(-1)}}>
                        <img src={Back} alt="返回"/>
                    </div>
                    <div className="diary-icon-box">
                        <span className="keep-btn" onClick={() => {this.props.history.push('/memeda/diary/index')}}>保存</span>
                    </div>
                </div>
                <textarea ref="textBox" name="content" id="textarea" cols="30" rows="10" onChange={() => this.contentDispatch(this.refs.textBox.value)} defaultValue={this.state.targetContent} placeholder="记录此刻心情动态"></textarea>
            </div>        
        </DiaryDetailContainer>    
    )
  }
}

export default Detail