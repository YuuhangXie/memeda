import React, { Component } from 'react'

// import ApiService from 'utils/api.service.js'

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
                    <div className="add">
                        <img src="http://pz394k5aw.bkt.clouddn.com/jia%20%281%29.png" alt="添加"/>
                    </div>
                </div>
                <div className="date-box">
                    <div className="date-container">
                        <div className="passed-time">
                            <div className="anniver-icon">
                                <img src="http://pz394k5aw.bkt.clouddn.com/301568895059_.pic@3x.png" alt="icon"/>
                            </div>
                        </div>
                        <div className="passed-date">
                            <span>我们已相爱</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </AnniverContainer>
    )
  }
}