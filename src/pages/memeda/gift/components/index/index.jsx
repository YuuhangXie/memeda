import React, { Component } from 'react'

import ApiService from 'utils/api.service.js'
import storage from 'utils/storage.js'

import IndexUI from './indexUI'

export default class GiftIndex extends Component {
  state = {
      hide: true,
      giftAva: [],
      target: 0
    }
  

  async componentDidMount() {
    let result = await ApiService.get('/giftavatar')

    storage.set('giftAvatar', result)

    this.setState({
      giftAva: storage.get('giftAvatar')
    })

  }

  clickHandler() {
    this.props.history.push('/index/home')
  }

  async modificationPage(event, index) {
    event.stopPropagation()
    let result = await ApiService.get('/giftavatar')

    storage.set('giftAvatar', result)
    this.setState({
      hide: !this.state.hide,
      target: index,
      giftAva: storage.get('giftAvatar')
    })
  }

  loadRouter(path) {
    this.props.history.push(path)
  }

  render() {
    return (
      this.state.giftAva.length === 0 ? false : 
        <IndexUI
          clickHandler={this.clickHandler.bind(this)}
          modificationPage={this.modificationPage.bind(this)}
          loadRouter={this.loadRouter.bind(this)}
          indexMsg={this.state}
        ></IndexUI>
    )
  }
}