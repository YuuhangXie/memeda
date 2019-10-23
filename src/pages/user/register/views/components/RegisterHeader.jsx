import React, { Component } from 'react'
import styled from 'styled-components'
import BackIcon from 'images/login/login-backicon.png'


const RegHeadContainer = styled.div`
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



class RegisterHeader extends Component {

  handleBack = ()=>{
    this.props.back()
  }

  render() {
    return (
      <RegHeadContainer>
        <div>
          <i onClick={this.handleBack}>
            <img className="BackIcon" src={BackIcon} alt="back"/>
          </i>
          <p>注册</p>
        </div>
      </RegHeadContainer>
    )
  }
}

export default RegisterHeader
