import React, { Component } from 'react'

import {HomeContainer} from './StyledHome'

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <div className="home-container">
          <div className="img-box">
            <img src="http://pz394k5aw.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191018223332.jpg" alt="图片"/>
            <span>你好像迷路了呀</span>
          </div>
        </div>  
      </HomeContainer>
    )
  }
}
