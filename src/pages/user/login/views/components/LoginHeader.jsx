import React, { Component } from 'react'
import styled from 'styled-components'
import BackIcon from 'images/login/login-backicon.png'


const LogHeadContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: .44rem;
  >div{
    width: 100%;
    height: 100%;
    position: relative;
    i{
      position: absolute;
      height: .44rem;
      width: .42rem;
      text-align: center;
      line-height: .44rem;
      img{
        width: .2rem;
        height: .2rem;
      }
    }
    p{
      height: .44rem;
      line-height: .44rem;
      text-align: center;
      font-size: .17rem;
      color: #fff;
    }
  }
`



class LoginHeader extends Component {

  render() {
    return (
      <LogHeadContainer>
        <div>
          <i onClick={this.props.back}>
            <img className="BackIcon" src={BackIcon} alt="back"/>
          </i>
          <p>{this.props.text}</p>
        </div>
      </LogHeadContainer>
    )
  }
}

export default LoginHeader
