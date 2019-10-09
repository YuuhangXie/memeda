import React, { Component } from 'react'
import _ from 'lodash'

import Back from 'images/gift/back.png'
import Choose from 'images/gift/choose.png'

import axios from 'utils/api.service.js'

import {
    GiftContainer
} from '../view/StyledGift'

export default class Home extends Component {
  state = {
    ourwish: [],
    show: true,
    count: []
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

      axios.put('/api/gift/ourwish/' + id, {
          choose: true
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
                    <span className="title">我们的愿望</span>
                    <div className="addTip" onClick={() => { this.props.history.push( '/memeda/gift/add?our') }}>
                        <div className="vertical-box"></div>
                        <div className="transverse-box"></div>
                    </div>
                </div>
                <div className="our-wish-container">
                    <ul className="ourwish-box">
                        {this.state.ourwish.map(( value, index ) => {
                            return(
                                <li key={value.id}>
                                    <span className="delete-btn"></span>
                                    <span>{index + 1}.{value.content}</span>
                                    <div className="choose-box" onClick={ () => this.clickHandler(index + 1, value.id)}>
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