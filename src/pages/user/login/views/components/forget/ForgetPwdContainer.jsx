import React, { Component } from 'react'
import ForgetPwdContainer from './StyledForgetPwd'
import LoginHeader from '../LoginHeader'
import PhoneItem from '../PhoneItemContainer'
import ValiIcon from 'images/login/login-icon2.png'
import PwdIcon from 'images/login/login-icon3.png'
import {BorderLi} from '../../StyledLoginBox'

export default class ForgetPwd extends Component {
  render() {
    return (
      <ForgetPwdContainer>
        <LoginHeader back={()=>{this.props.history.go(-1)}} text="忘记密码"></LoginHeader>
        <ul className="forget-form">
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
          <li className="getvali-btn">
            <div onClick={this.toRegister}>完成</div>
          </li>
        </ul>
      </ForgetPwdContainer>
    )
  }
}
