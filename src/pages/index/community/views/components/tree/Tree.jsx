import React, { Component } from 'react'

import ApiService from 'utils/api.service'
import storage from 'utils/storage'

import treeLevel1 from 'images/community/tree1.png'
import water from 'images/community/water.png' 
import sun from 'images/community/sun.png' 
import pao from 'images/community/pao.png'

import {
  TreeContainer
} from './components/StyledTree'

export default class Tree extends Component {
  state = {
    watering: true,
    sunning: true,
    treelevel: 1,
    power: 5,
    maxpower: 200
  }

  async componentDidMount() {
    this.user_id = storage.get('user_id')
    let data
    try {
      data = await ApiService.customRequest(`/community/lovetree/${this.user_id}`)
    } catch(e) {
      data = {
        watering: false,
        sunning: false,
        treelevel: 1,
        power: 0,
        maxpower: 200
      }
      await ApiService.customRequest({
        method: 'post',
        url: '/community/lovetree/',
        data: {
          ...data,
          id: this.user_id
        }
      })
    }
    this.setState(data)
  }

  handleWater = () => {
    this.setState({
      watering: true,
      power: this.state.power + 5
    })
    this.handlePost({
      ...this.state,
      power: this.state.power + 5,
      watering: true
    })
  }

  handleSunning = () => {
    this.setState({
      sunning: true,
      power: this.state.power + 5
    })
    this.handlePost({
      ...this.state,
      power: this.state.power + 5,
      sunning: true
    })
  }

  handlePost = async  (data) => {
    let result = await ApiService.customRequest({
      method: 'patch',
      url: `/community/lovetree/${this.user_id}`,
      data
    })
    console.log(result)
    await ApiService.customRequest({
      method: 'patch',
      url: `/community/rankList/${this.user_id}`,
      data: {
        "rankScore": data.power
      }
    })
  }

  render() {
    return (
      <TreeContainer>
        <span className="level">{this.state.power}/{this.state.maxpower}</span>
        <img src={treeLevel1} className="tree level1" alt="" width="100%" height="100%" />
        <div className="watering" onClick={this.handleWater}>
          {!this.state.watering && (
            <>
              <img src={water} className="water" alt=""/>
              <img src={pao} alt="" className="pao" />
            </>
          )}
        </div>
        {this.state.watering && <span className="water-tip">恩爱值+5</span>}
        <div className="sunning" onClick={this.handleSunning}>
          {!this.state.sunning && (
            <>
            <img src={sun} className="sun" alt=""/>
            <img src={pao} alt="" className="pao" />
            </>
          )}
        </div>
        {this.state.sunning && <span className="sun-tip">恩爱值+5</span>}
      </TreeContainer>
    )
  }
}
