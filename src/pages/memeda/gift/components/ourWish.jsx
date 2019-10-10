import React, { Component } from 'react'
import _ from 'lodash'

import Back from 'images/gift/back.png'
import Choose from 'images/gift/choose.png'
import Delete from 'images/gift/delete.png'

import axios from 'utils/api.service.js'

import {
    GiftContainer
} from '../view/StyledGift'

export default class Home extends Component {
  state = {
    ourwish: [],
    deleteMenu: [],
    show: true,
    hideBtnShow: false,
    deleteActive: false,
    count: [],
    timeOutEvent: 0,
    longTouch: 0
  }

  async componentDidMount() {
      let result = await axios.get('/api/gift/ourwish')
      this.setState({
          ourwish: result.data.ourWish
      })
  }

  clickHandler(index, id) {
      let arr = this.state.count
      arr.push(index)
      if(_.uniq(arr, index).length !== arr.length)  _.pull(arr, index)
      
      this.setState({
          count: arr
      })

    //   axios.put('/api/gift/ourwish/' + id, {
    //       choose: true
    //   })
  }

  deleteHandler(index) {
    let arr = this.state.deleteMenu
    arr.push(index)
    if(_.uniq(arr, index).length !== arr.length)  _.pull(arr, index)

    this.setState({
        deleteMenu: arr
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
            <div className="gift-container">
                <div className="header-container">
                    <div className="back"  onClick={() => {this.props.history.push( '/memeda/gift/index')}}>
                        <img src={Back} alt="返回"/>
                    </div>
                    <span className="title">我们的愿望</span>
                    <div className={this.state.hideBtnShow ? "hideAva" : "addTip"} onClick={() => { this.props.history.push( '/memeda/gift/add?our') }}>
                        <div className="vertical-box"></div>
                        <div className="transverse-box"></div>
                    </div>
                    <div className={this.state.hideBtnShow ? "delete-bar" : "hideAva"}>
                        <span className="keep-delete" onClick={() => { this.setState({ hideBtnShow: false }) }}>保存</span>
                        <span className="delete-chosed">
                            <img src={Delete} alt="删除"/>
                        </span>
                    </div>
                </div>
                <div className="our-wish-container">
                    <ul className="ourwish-box">
                        {this.state.ourwish.map(( value, index ) => {
                            return(
                                <li key={value.id} onTouchStart={() => this.touchStart()} onTouchMove={(e) => this.touchMove(e)} onTouchEnd={() => this.touchEnd()}>
                                    <span className={this.state.hideBtnShow ? (_.indexOf(this.state.deleteMenu, index + 1) === -1 ? "delete-btn" : "delete-btn active") : "hideAva"} onClick={() => this.deleteHandler(index + 1)}></span>
                                    <span className={this.state.hideBtnShow ? "mag-15" : ""}>{index + 1}.{value.content}</span>
                                    <div className={this.state.hideBtnShow ? "hideAva" : "choose-box"} onClick={ () => this.clickHandler(index + 1, value.id)}>
                                        <span className={ _.indexOf(this.state.count, index + 1) === -1 ? "not-chosed" : "be-chosed" }>
                                            <img src={Choose} alt="选择"/>
                                        </span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>    
        </GiftContainer>
    )
  }
}