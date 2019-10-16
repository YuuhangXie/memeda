import React, { Component } from 'react'

import Back from 'images/gift/back.png'

import storage from 'utils/storage.js'

import {
    GiftContainer
} from '../view/StyledGift'

export default class Home extends Component {
  keepWish() {
    let giftMenu = storage.get('giftChosed')
    storage.set('giftChosed', [{
        id: giftMenu.length,
        content: this.refs.textBox.value,
        choose: false
    }, ...storage.get('giftChosed')])

    this.props.history.push('/memeda/gift/wish?our')
  }

  render() {
    return (
        <GiftContainer>
            <div className="gift-container">
                <div className="header-container">
                    <div className="back"  onClick={() => {this.props.history.go(-1)}}>
                        <img src={Back} alt="返回"/>
                    </div>
                    <span className="title">{this.props.location.search.split('?')[1] === 'our' ? '我们的愿望' : '我的愿望'}</span>
                    <span className="keep-btn" onClick={() => this.keepWish()}>保存</span>
                </div>
                <textarea ref="textBox" name="content" id="textarea" cols="30" rows="10"></textarea>
            </div>    
        </GiftContainer>
    )
  }
}