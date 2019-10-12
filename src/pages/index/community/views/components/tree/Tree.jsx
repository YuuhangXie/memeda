import React, { Component } from 'react'

import treeLevel1 from 'images/community/tree1.png'
import water from 'images/community/water.png' 
import sun from 'images/community/sun.png' 
import pao from 'images/community/pao.png'

import {
  TreeContainer
} from './components/StyledTree'

export default class Tree extends Component {


  render() {
    return (
      <TreeContainer>
        <img src={treeLevel1} className="tree level1" alt="" width="100%" height="100%" />
        <img src={water} className="water" alt=""/>
        <img src={sun} className="sun" alt=""/>
        <img src={pao} alt="" className="pao" />
      </TreeContainer>
    )
  }
}
