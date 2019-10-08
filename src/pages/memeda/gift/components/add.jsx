import React, { Component } from 'react'

import Back from 'images/gift/back.png'

import axios from 'utils/api.service.js'

import {
    GiftContainer
} from '../view/StyledGift'

export default class Home extends Component {
  state = {
    ourwish: []
  }

  async componentDidMount() {
      let result = await axios.get('/api/gift/tawish')
      this.setState({
          ourwish: result.data.ourWish
      })
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
                    <span className="keep-btn">保存</span>
                </div>
                <textarea name="content" id="textarea" cols="30" rows="10"></textarea>
            </div>    
        </GiftContainer>
    )
  }
}