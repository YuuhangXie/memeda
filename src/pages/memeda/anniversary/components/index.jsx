import React, { Component } from 'react'


import Back from 'images/gift/back.png'

import { AnniverContainer } from '../view/StyledAnniver'

export default class Home extends Component {

  render() {
    return (
        <AnniverContainer>
            <div className="anni-container">
                <div className="header-container">
                    <div className="back"  onClick={() => {this.props.history.push( '/memeda/gift/index')}}>
                        <img src={Back} alt="返回"/>
                    </div>
                    <span className="title">纪念日</span>
                    <div>
                        <div className="vertical-box"></div>
                        <div className="transverse-box"></div>
                    </div>
                </div>
            </div>
        </AnniverContainer>
    )
  }
}