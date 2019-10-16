import React, { Component } from 'react'

import axios from 'utils/api.service.js'

import {
  GiftContainer
} from '../view/StyledGift'

import Picture from './picture'

import Back from 'images/gift/back.png'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      hide: true,
      giftAva: {}
    }
  }

  clickHandler() {
    this.props.history.push('/index/home')
  }

  modificationPage(event) {
    event.stopPropagation()
    this.setState({
      hide: !this.state.hide
    })
  }

  async componentDidMount() {
    let result = await axios.get('/api/gift/giftava')
    this.setState({ giftAva: result.data })
  }

  render() {
    return (
        <GiftContainer>
            <div className="gift-container">
                <div className="header-container">
                  <div className="back" onClick={() => this.clickHandler()}>
                    <img src={Back} alt="返回"/>
                  </div>
                  <span className="title">愿望清单</span>
                </div>
                <div className="gift-body">
                  <div className="body-container">
                    <div className="our-wish wish-box"  onClick={() => {this.props.history.push( '/memeda/gift/wish?our')}}>
                      <div className="ava-container"  onClick={(e) => this.modificationPage(e)}>
                        <img src={this.state.giftAva.ourAva} alt="头像"/>
                      </div>
                      <span>我们的愿望</span>
                    </div>
                    <div className="my-wish wish-box"  onClick={() => {this.props.history.push( '/memeda/gift/wish?my')}}>
                      <div className="ava-container"  onClick={(e) => this.modificationPage(e)}>
                        <img src={this.state.giftAva.myAva} alt="头像"/>
                      </div>
                      <span>我的愿望</span>
                    </div>
                    <div className="ta-wish wish-box"  onClick={() => {this.props.history.push( '/memeda/gift/wish?ta')}}>
                      <div className="ava-container"  onClick={(e) => this.modificationPage(e)}>
                        <img src={this.state.giftAva.taAva} alt="头像"/>
                      </div>
                      <span>他的愿望</span>
                    </div>  
                  </div>
                </div>
            </div> 
            <div className={this.state.hide ? "hideAva" : "gift-component"}>
              <Picture
                changeProps={(e) => this.modificationPage(e)}
                hide={this.state.hide}
              ></Picture>
            </div>
        </GiftContainer>
        
    )
  }
}