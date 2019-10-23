import styled from 'styled-components'
import React, { Component } from 'react'
import BackIcon from 'images/login/login-backicon.png'

const BindHeadContainer = styled.div`
  background: #F09199;
  width: 100%;
  height: .44rem;
  text-align: center;
  line-height: .44rem;
  font-size: .17rem;
  color: #fff;
  position: relative;
  i{
    position: absolute;
    left: 0;
    top: 0;
    height: .44rem;
    width: .42rem;
    text-align: center;
    line-height: .44rem;
    img{
      width: .2rem;
      height: .2rem;
    }
  }
  span{
    position: absolute;
    right: 0;
    top: 0;
    height: .44rem;
    width: .68rem;
    text-align: center;
    line-height: .5rem;
    font-size: .14rem;
  }
`




export default class BindHead extends Component {
  render() {
    return (
      <BindHeadContainer>
        <i onClick={this.props.back}>
          <img className="BackIcon" src={BackIcon} alt="back"/>
        </i>
        {this.props.text}

        {this.props.notice ? <span onClick={this.props.toNotice}>通知</span> : null}
      </BindHeadContainer>
    )
  }
}
