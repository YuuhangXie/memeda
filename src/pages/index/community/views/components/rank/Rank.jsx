import React, { Component } from 'react'
import ApiService from 'utils/api.service'
import storage from 'utils/storage'

import {
  Gray
} from './components/StyledRank'

import Top from './components/Top'
import RankList from './components/RankList'

export default class Rank extends Component {
  state = {
    ranklist: [],
    user: [],
    score: 0
  }

  async componentDidMount() { 
    let data = await ApiService.customRequest({
      url: '/community/rankList',
      method: 'get'
    })
    let user = storage.get('share_info')
    try {
      this.user_data = await ApiService.customRequest({
        url: '/community/rankList/' + user.id,
        method: 'get'
      })
    } catch(e) {
      if(!this.user_data) {
        data.push({
          "id": user.id,
          "rankScore": 0,
          "userList": [
            {
              "userId": user.id,
              "img_url": user.head_img,
              "kickName": user.nickname,
              "sex": user.sex
            },
            {
              "userId": user.bind_info.id,
              "img_url": user.bind_info.head_img,
              "kickName": user.bind_info.nickname,
              "sex": user.bind_info.sex
            }
          ]
        })
      }

        await ApiService.customRequest({
          url: '/community/rankList',
          method: 'post',
          data: {
            "id": user.id,
            "rankScore": 0,
            "userList": [
              {
                "userId": user.id,
                "img_url": user.head_img,
                "kickName": user.nickname,
                "sex": user.sex
              },
              {
                "userId": user.bind_info.id,
                "img_url": user.bind_info.head_img,
                "kickName": user.bind_info.nickname,
                "sex": user.bind_info.sex
              }
            ]
          }
        })
    }
    // 获取用户接口
    this.setState({
      ranklist: this.sortList(data),
      user: user,
      score: this.user_data.rankScore
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
        <Top userInfo={this.state.user} rank={this.state.ranklist.length} score={ this.state.score }></Top>
        <Gray></Gray>
        {this.state.ranklist.length !== 0 && this.state.ranklist.map((item, index) => (
          <RankList rankInfo={item} index={index} key={Math.ceil(Math.random()*10000)}></RankList>
        ))}
      </div>
    )
  }
}
