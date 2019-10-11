import React, { Component } from 'react'

import {
  RankListContainer,
  BorderRank
} from './StyledRank'

export default class RankList extends Component {
  render() {
    let { index } = this.props
    let { userList, rankScore } = this.props.rankInfo
    return (
      <RankListContainer>
        <BorderRank>
          <div className="order"><span>{index + 1}</span></div>
          <div className="pic">
            <img src={userList[1].img_url} alt=""/>
            <img src={userList[0].img_url} alt=""/>
          </div>
          <div className="loverCount">
            <div className="name">{userList[1].kickName + ' & ' + userList[0].kickName}</div>
            <div className="count"><span role="img" aria-label="emoji">❤️</span>恩爱值：{rankScore}</div>
          </div>
        </BorderRank>
      </RankListContainer>
    )
  }
}
