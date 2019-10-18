import React, { Component } from 'react'

import Back from 'images/gift/back.png'

import { AnniverContainer } from '../view/StyledAnniver'

export default class Home extends Component {

  render() {
    return (
        <AnniverContainer>
            <div className="anni-container">
                <div className="header-container">
                    <div className="back"  onClick={() => {this.props.history.push( '/')}}>
                        <img src={Back} alt="返回"/>
                    </div>
                    <span className="title">纪念日</span>
                </div>
                <div className="date-box">
                    <div className="date-container">
                        <img src="http://pz394k5aw.bkt.clouddn.com/timg.jpg" alt="loading"/>
                        <span>努力开发中，敬请期待……</span>
                    </div>
                    
                </div>
            </div>
        </AnniverContainer>
    )
  }
}