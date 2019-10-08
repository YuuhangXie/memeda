import React, { Component } from 'react'

import ApiService from 'utils/api.service'

import Publish from './components/Publish'
import Refresh from './components/Refresh'
import Views from './components/Views'

export default class Share extends Component {
  state = {
    shareList: [],
    pageIndex: 1
  }

  async componentDidMount() {
    const requestData = {
      method: 'post',
      url: '/api/getCommunitys',
      data: {
        pageIndex: this.state.pageIndex
      }
    }
    let list = await ApiService.customRequest(requestData)
    this.setState({
      shareList: list.showList
    })
  }

  render() {
    return (
      <div>
        <Publish></Publish>
        {this.state.shareList.length && this.state.shareList.map((item, index) => (
          <Views viewData={item} key={index}></Views>
        ))}
        <Refresh></Refresh>
      </div>
    )
  }
}
