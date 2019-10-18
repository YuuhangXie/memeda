import React, { Component } from 'react'
import _ from 'lodash'

import storage from 'utils/storage'

import {
    GiftContainer
} from '../../view/StyledGift'

import connect from './connect'

import OurWishUI from './ourWishUI'
import TaWishUI from '../taWish/taWishContainer'

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
    search: _.split(this.props.location.search, '?')[1],
    targetList: {
        'our': 'giftChosed',
        'my': 'myGiftChosed'
    }
  }

  componentDidMount() {
      if(this.state.search === 'our') {
          if(storage.get('giftChosed')) this.props.getGiftList()

          else  this.props.detailGiftMsg()
      }
      else if(this.state.search === 'my') {
        if(storage.get('myGiftChosed')) this.props.getMyGiftList()

        else this.props.myDetailGiftMsg()
      }
      
      this.forceUpdate()
  }

  clickHandler(index) {
      let _giftList = storage.get(this.state.targetList[this.state.search])
      let target_id =  _giftList[index].id
      _giftList[index].choose = !_giftList[index].choose

      storage.set(this.state.targetList[this.state.search], 
          _giftList 
      )

      switch(this.state.search) {
          case 'our': 
            this.props.getGiftList()
            this.props.ourGiftListDispatch(_giftList[index], target_id)
            break
          case 'my': 
            this.props.getMyGiftList()
            this.props.myGiftListDispatch(_giftList[index], target_id)
            break
          default: return false
      }
  }

  hideBtn() {
    this.setState({ 
        deleteMenu: [],
        hideBtnShow: false 
    })
  }

  determineDelete() {
    let _giftList = storage.get(this.state.targetList[this.state.search])
    
    _.forEachRight(this.state.deleteMenu, (value) => {
       let target_id = _giftList[value].id
       this.state.search === 'our' ? this.props.deleteOurWish(target_id) : this.props.deleteMyWish(target_id)

       _.remove(_giftList, (item) => {
            return _.indexOf(_giftList, item) === value
       })
    })
    storage.set(this.state.targetList[this.state.search], 
        _giftList 
    )



    this.state.search === 'our' ? this.props.getGiftList() : this.props.getMyGiftList()

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
    return (
        <GiftContainer>
            {
                (() => {
                    switch(this.state.search) {
                        case 'my':
                        case 'our':
                            return (
                                <OurWishUI
                                    ourList={this.state}
                                    giftList={this.state.search === 'our' ? this.props.giftChosed.toJS() : this.props.myGiftChosed.toJS()}
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
                                <TaWishUI
                                    loadRouter={this.loadRouter.bind(this)}
                                ></TaWishUI>
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