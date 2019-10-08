import React, { Component } from 'react'

import HomeUI from './HomeUI'

import Album from 'images/home/albumIcon.png'
import Anniversary from 'images/home/anniversaryIcon.png'
import Diary from 'images/home/diaryIcon.png'
import Period from 'images/home/periodIcon.png'
import Gift from 'images/home/giftIcon.png'

import axios from 'utils/api.service.js'


import {
  HomeContainer
} from './StyledHome'

export default class Home extends Component {
  state = {
    date: '',
    avatar: {},
    tabList: []
  }

  async componentDidMount() {
    let result = await axios.get('/api/home')
    this.setState({
      tabList: result.data.tabMsg,
      date: result.data.date,
      avatar: result.data.avatar
    })
  }

  clickHandler(path) {
    this.props.history.push('/memeda/' + path)
  }
  
  render() {
    return (
      this.state.tabList.length === 0 ? false : 
      <HomeContainer>
        <HomeUI
          date={this.state.date}
          avatar={this.state.avatar}
        ></HomeUI>
        <div className="home-tabbar">
          <div className="home-member" onClick={() => this.clickHandler('album')} key={this.state.tabList[0].key}>
              <div className="icon-box">
                  <img src={Album} alt="图标"/>
              </div>
              <span>{this.state.tabList[0].title}</span>
          </div>
          <div className="home-member" onClick={() => this.clickHandler('diary')} key={this.state.tabList[1].key}>
              <div className="icon-box">
                  <img src={Diary} alt="图标"/>
              </div>
              <span>{this.state.tabList[1].title}</span>
          </div>
          <div className="home-member" onClick={() => this.clickHandler('anniversary')} key={this.state.tabList[2].key}>
              <div className="icon-box">
                  <img src={Anniversary} alt="图标"/>
              </div>
              <span>{this.state.tabList[2].title}</span>
          </div>
          <div className="home-member" onClick={() => this.clickHandler('period')} key={this.state.tabList[3].key}>
              <div className="icon-box">
                  <img src={Period} alt="图标"/>
              </div>
              <span>{this.state.tabList[3].title}</span>
          </div>
          <div className="home-member" onClick={() => this.clickHandler('gift')} key={this.state.tabList[4].key}>
              <div className="icon-box">
                  <img src={Gift} alt="图标"/>
              </div>
              <span>{this.state.tabList[4].title}</span>
          </div>
      </div>   
      </HomeContainer>
    )
  }
}
