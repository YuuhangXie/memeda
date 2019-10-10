import React, { Component } from 'react'
import ApiService from 'utils/api.service'

import {
  Gray
} from './components/StyledRank'

import Top from './components/Top'
import RankList from './components/RankList'

export default class Rank extends Component {
  state = {
    ranklist: [],
    user: []
  }

  async componentDidMount() {
    let data = await ApiService.customRequest({
      url: '/api/comment/getLoveRank',
      method: 'get'
    })

    let user = await ApiService.customRequest({
      url: '/api/profile/users'
    })
    // 获取用户接口
    this.setState({
      ranklist: this.sortList(data.rankList),
      user: user.UserList
    })
  }

  // _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });

  sortList = function (list) {
    return list.sort( function (a, b) {
      return b.rankScore - a.rankScore
    })
  }

  render() {
    return (
      <div className="ranklist">
        <Top userInfo={this.state.user} rank={1} score={9231}></Top>
        <Gray></Gray>
        {this.state.ranklist.length !== 0 && this.state.ranklist.map((item, index) => (
          <RankList rankInfo={item} index={index} key={Math.ceil(Math.random()*10000)}></RankList>
        ))}
      </div>
    )
  }
}
