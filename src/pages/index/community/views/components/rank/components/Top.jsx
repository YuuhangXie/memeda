import React, { Component } from 'react'

import top_bg from 'images/community/rank_bg.png'

import {
  TopContainer
} from './StyledRank'

export default class Top extends Component {
  render() {
    let { userInfo, rank, score } = this.props
    return (
      <TopContainer>
        <div className="bg">
          <img className="top-bg" src={top_bg} alt=""/>
          <p>恩爱值：{score ? score : 0}</p>
        </div>
        <div className="self-rank">
          <span>好友榜：{rank ? rank : '暂未排名'}</span>
          <div className="self-rank-info">
            <img src={userInfo.length !== 0 ? this.props.userInfo.head_img : top_bg} alt=""/>
            ❤️
            <img src={userInfo.length !== 0 ? this.props.userInfo.bind_info.head_img : top_bg} alt=""/>
          </div>
        </div>
        <div className="gray"></div>
      </TopContainer>
    )
  }
}
