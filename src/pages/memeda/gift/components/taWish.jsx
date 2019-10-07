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
                    <div className="back"  onClick={() => {this.props.history.push( '/memeda/gift/index')}}>
                        <img src={Back} alt="返回"/>
                    </div>
                    <span className="title">他的愿望</span>
                </div>
                <div className="our-wish-container">
                    <ul className="ourwish-box">
                        {this.state.ourwish.map(( value, index ) => {
                            return(
                                <li key={value.id}>{index + 1}.{value.content}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>    
        </GiftContainer>
    )
  }
}