import React, { Component } from 'react'

import HomeUI from './HomeUI'


import Apiservice from 'utils/api.service.js'
import storage from 'utils/storage.js'

import {
  HomeContainer
} from './StyledHome'

export default class Home extends Component {
  state = {
    date: '',
    avatar: {},
    tabList: [],
    userInfo: []
  }

  async componentDidMount() {
    let result = await Apiservice.get('/api/home')
    this.state.userInfo = await Apiservice.get('/userlist')

    storage.set('userMsg', this.state.userInfo)

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
          tabList={this.state.tabList}
          date={this.state.date}
          avatar={this.state.avatar}
          userInfo={this.state.userInfo}
        ></HomeUI>
        <div className="home-tabbar">
          <div className="home-member" onClick={() => this.clickHandler('album')} key={this.state.tabList[0].key}>
              <div className="icon-box">
                  <img src={this.state.tabList[0].icon} alt="图标"/>
              </div>
              <span>{this.state.tabList[0].title}</span>
          </div>
          <div className="home-member" onClick={() => this.clickHandler('diary')} key={this.state.tabList[1].key}>
              <div className="icon-box">
                  <img src={this.state.tabList[1].icon} alt="图标"/>
              </div>
              <span>{this.state.tabList[1].title}</span>
          </div>
          <div className="home-member" onClick={() => this.clickHandler('anniversary')} key={this.state.tabList[2].key}>
              <div className="icon-box">
                  <img src={this.state.tabList[2].icon} alt="图标"/>
              </div>
              <span>{this.state.tabList[2].title}</span>
          </div>
          <div className="home-member" onClick={() => this.clickHandler('period')} key={this.state.tabList[3].key}>
              <div className="icon-box">
                  <img src={this.state.tabList[3].icon} alt="图标"/>
              </div>
              <span>{this.state.tabList[3].title}</span>
          </div>
          <div className="home-member" onClick={() => this.clickHandler('gift')} key={this.state.tabList[4].key}>
              <div className="icon-box">
                  <img src={this.state.tabList[4].icon} alt="图标"/>
              </div>
              <span>{this.state.tabList[4].title}</span>
          </div>
      </div>   
      </HomeContainer>
    )
  }
}
