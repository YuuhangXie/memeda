import React, { Component } from 'react'

import storage from 'utils/storage'

import connect from './connect'

import TaWishUI from './taWishUI'

@connect
class TaWish extends Component {
  componentDidMount() {
          if(storage.get('taGiftChosed')) this.props.getTaGiftList()

          else  {
              this.props.taDetailGiftMsg()
              this.forceUpdate()
          }
  }

  render() {
    return (
        <TaWishUI
            taWish={this.props.taGiftChosed.toJS()}
            loadRouter={this.props.loadRouter.bind(this)}
        ></TaWishUI>
    )
  }
}

export default TaWish