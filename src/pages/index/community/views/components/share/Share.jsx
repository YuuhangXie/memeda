import React, { Component } from 'react'

import ApiService from 'utils/api.service'
import storage from 'utils/storage'

import Publish from './components/Publish'
import Refresh from './components/Refresh'
// import Views from './components/Views'

import {
  withRouter
} from 'react-router-dom'

class Share extends Component {
  state = {
    shareList: [],
    userInfo: ''
  }

  async componentDidMount() {
    const requestData = {
      method: 'get',
      url: '/community/showList',
    }
    let user_id = storage.get('user_id')
    let list = await ApiService.customRequest(requestData)
    let userInfo = await ApiService.customRequest({
      url: '/userList/' + user_id
    })
    storage.set('share_info', userInfo)
    list = list.reverse()
    this.setState({
      shareList: list,
      userInfo: userInfo
    })
  }

  async handleAddPage () {
    const requestData = {
      method: 'get',
      url: '/community/showList',
    }
    let list = await ApiService.customRequest(requestData)
    this.setState({
      shareList: [
        // ...this.state.shareList,
        ...list.reverse()
      ]
    })
  }

  render() {
    return (
      <div>
        {this.state.userInfo !== '' && <Publish user={this.state.userInfo}></Publish>}
        {this.state.shareList.length !== 0 && <Refresh handleAddPage={this.handleAddPage.bind(this)} list={this.state.shareList}></Refresh>}
      </div>
    )
  }
}

export default withRouter(Share)