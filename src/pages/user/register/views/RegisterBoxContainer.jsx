import React, { Component } from 'react'

import {RegisterBoxContainer, BorderLi} from './StyledRegisterBox'

import RegisterHeader from './components/RegisterHeader'
import PhoneItem from './components/PhoneItemContainer'
import ValiIcon from 'images/login/login-icon2.png'
import PwdIcon from 'images/login/login-icon3.png'




export default class RegisterBox extends Component {



  handleBack = () => {
    this.props.history.go(-1)
  }


  render() {
    return (
      <RegisterBoxContainer>
        <div>
          <RegisterHeader back={this.handleBack}></RegisterHeader>
          <ul className="register-form">
            <BorderLi>
              <PhoneItem></PhoneItem>
            </BorderLi>
            <BorderLi>
              <i>
                <img src={ValiIcon} alt="验证码"/>
              </i>
              <input type="password" placeholder="输入验证码"/>
            </BorderLi>
            <BorderLi>
              <i>
                <img src={PwdIcon} alt="密码"/>
              </i>
              <input type="password" placeholder="输入密码"/>
            </BorderLi>
            <BorderLi>
              <i>
                <img src={PwdIcon} alt="密码"/>
              </i>
              <input type="password" placeholder="确认密码"/>
            </BorderLi>
            <li className="login-reg">
              <div onClick={this.toRegister}>注册</div>
            </li>
          </ul>
        </div>
      </RegisterBoxContainer>
    )
  }
}
