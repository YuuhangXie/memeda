import React, { Component } from 'react'
import _ from 'lodash'

import storage from 'utils/storage'

import {
    GiftContainer
} from '../../view/StyledGift'

import connect from '../connect'

import OurWishUI from './ourWishUI'

@connect
class Home extends Component {
  state = {
    deleteMenu: [],
    show: true,
    hideBtnShow: false,
    deleteActive: false,
    timeOutEvent: 0,
    longTouch: 0,
    determine: false,
    search: ''
  }

  componentDidMount() {
      if(storage.get('giftChosed')) {
          this.props.getGiftList()
      }
      else {
          this.props.detailGiftMsg(_.split(this.props.location.search, '?')[1])
          this.forceUpdate()
      }

      this.setState({
          search: _.split(this.props.location.search, '?')[1]
      })
  }

  clickHandler(index) {
      let _giftList = storage.get("giftChosed")
      _giftList[index].choose = !_giftList[index].choose
      storage.set('giftChosed', 
          _giftList 
      )
      this.props.getGiftList()
  }

  hideBtn() {
    this.setState({ 
        deleteMenu: [],
        hideBtnShow: false 
    })
  }

  determineDelete() {
    let _giftList = storage.get("giftChosed")
    _.forEachRight(this.state.deleteMenu, (value) => {
       _.remove(_giftList, (item) => {
            return _.indexOf(_giftList, item) === value
       })
    })
    storage.set('giftChosed', 
        _giftList 
    )

    this.props.getGiftList()

    this.hideBtn()
    this.deleteList()
  }

  loadRouter(path) {
      this.props.history.push(path)
  }

  deleteHandler(index) {
    this.setState({
        deleteMenu: _.intersection(this.state.deleteMenu, [index]).length !== 0 ? 
            _.without(this.state.deleteMenu, index) : _.concat(this.state.deleteMenu, index)
    })
  }

  deleteList() {
    this.setState({
        determine: !this.state.determine
    })
  }

  touchStart() {
      if(this.state.hideBtnShow)    return
      this.setState({
          timeOutEvent: setTimeout(() => {
              this.setState({ longTouch: 1 })
          }, 500)
      })
  }

  touchMove(e) {
      clearTimeout(this.state.timeOutEvent)
      this.setState({ timeOutEvent: 0 })
  }

  touchEnd() {
    clearTimeout(this.state.timeOutEvent)
    if(this.state.timeOutEvent !== 0 && this.state.longTouch === 1) {
        this.setState({
            longTouch: 0,
            hideBtnShow: true
        })
        console.log("long~~~~~~touch")
    }
  }

  render() {
    let search = _.split(this.props.location.search, '?')[1]
    return (
        <GiftContainer>
            {
                (() => {
                    switch(search) {
                        case 'my':
                        case 'our':
                            return (
                                <OurWishUI
                                    ourList={this.state}
                                    giftList={this.props.giftChosed.toJS()}
                                    clickHandler={this.clickHandler.bind(this)}
                                    deleteHandler={this.deleteHandler.bind(this)}
                                    touchStart={this.touchStart.bind(this)}
                                    touchMove={this.touchMove.bind(this)}
                                    touchEnd={this.touchEnd.bind(this)}
                                    hideBtnShow={this.hideBtn.bind(this)}
                                    hideBtn={this.hideBtn.bind(this)}
                                    loadRouter={this.loadRouter.bind(this)}
                                    deleteList={this.deleteList.bind(this)}
                                    determineDelete={this.determineDelete.bind(this)}
                                ></OurWishUI>
                            )
                        case 'ta':
                            return (
                                <div></div>
                            )
                        default: return false
                    }
                })()
            }
        </GiftContainer>
    )
  }
}

export default Home