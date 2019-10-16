import React, { Component } from 'react'

import ApiService from 'utils/api.service'

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
    let data = await ApiService.customRequest('/community/lovetree/13520611622')
    this.setState(data)
  }

  handleWater = () => {

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
        <div className="sunning">
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
