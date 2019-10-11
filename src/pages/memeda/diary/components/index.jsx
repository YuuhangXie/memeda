import React, { Component } from 'react'

import Back from 'images/gift/back.png'
import {
    DiaryContainer
} from '../view/StyledDiary'

import axios from 'utils/api.service.js'

export default class Home extends Component {
  state = {
      diaryList: []
  }

  async componentDidMount() {
      let result = await axios.get('/api/diary/diarycontent')
      this.setState({
          diaryList: result.data.diaryContent
      })
      console.log(this.state.diaryList)
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
                    <div className="addTip">
                        <div className="vertical-box"></div>
                        <div className="transverse-box"></div>
                    </div>
                </div>
                <div className="diary-body">
                    <div className="diary-container">
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
                                </div>
                            )
                        })}    
                    </div>
                </div>
            </div>    
        </DiaryContainer>
    )
  }
}