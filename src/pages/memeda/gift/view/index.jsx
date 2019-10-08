import React, { Component } from 'react'
import {
  GiftContainer
} from './StyledGift'

import Back from 'images/gift/back.png'
import OurAva from 'images/gift/ourAva.png'
import HerAva from 'images/gift/herAva.png'
import HisAva from 'images/gift/hisAva.png'

export default class Home extends Component {
  clickHandler() {
    this.props.history.push('/index/home')
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
                    <div className="our-wish wish-box">
                      <div className="ava-container">
                        <img src={OurAva} alt="头像"/>
                      </div>
                      <span>我们的愿望</span>
                    </div>
                    <div className="my-wish wish-box">
                      <div className="ava-container">
                        <img src={HerAva} alt="头像"/>
                      </div>
                      <span>我的愿望</span>
                    </div>
                    <div className="ta-wish wish-box">
                      <div className="ava-container">
                        <img src={HisAva} alt="头像"/>
                      </div>
                      <span>他的愿望</span>
                    </div>  
                  </div>
                </div>
            </div>    
        </GiftContainer>
    )
  }
}