import React, { Component } from 'react'
import {
  GiftContainer,
  AlbumContainer
} from '../view/StyledGift'

import Back from 'images/gift/back.png'
import OurAva from 'images/gift/ourAva.png'
import HerAva from 'images/gift/herAva.png'
import HisAva from 'images/gift/hisAva.png'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      hide: true
    }
  }

  clickHandler() {
    this.props.history.push('/index/home')
  }

  modificationPage() {
    this.setState({
      hide: !this.state.hide
    })
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
                    <div className="our-wish wish-box"  onClick={() => {this.props.history.push( '/memeda/gift/ourwish')}}>
                      <div className="ava-container"  onClick={() => this.modificationPage()}>
                        <img src={OurAva} alt="头像"/>
                      </div>
                      <span>我们的愿望</span>
                    </div>
                    <div className="my-wish wish-box"  onClick={() => {this.props.history.push( '/memeda/gift/mywish')}}>
                      <div className="ava-container"  onClick={() => this.modificationPage()}>
                        <img src={HerAva} alt="头像"/>
                      </div>
                      <span>我的愿望</span>
                    </div>
                    <div className="ta-wish wish-box"  onClick={() => {this.props.history.push( '/memeda/gift/tawish')}}>
                      <div className="ava-container"  onClick={() => this.modificationPage()}>
                        <img src={HisAva} alt="头像"/>
                      </div>
                      <span>他的愿望</span>
                    </div>  
                  </div>
                </div>
                <div className={this.state.hide ? 'hideAva' : 'updateAva'}>
                  <div className="picture-container">
                    <div className="photo update-box">拍照</div>
                    <AlbumContainer>
                      <div className="album update-box">从相册选择</div>
                    </AlbumContainer>
                    <div className="delete update-box" onClick={() => this.modificationPage()}>取消</div>  
                  </div>
                </div>
            </div>    
        </GiftContainer>
    )
  }
}