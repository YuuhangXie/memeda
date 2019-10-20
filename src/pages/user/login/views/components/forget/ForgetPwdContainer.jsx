import React, { Component } from 'react'
import ForgetPwdContainer from './StyledForgetPwd'
import LoginHeader from '../LoginHeader'
import PhoneItem from '../PhoneItemContainer'

export default class ForgetPwd extends Component {
  render() {
    return (
      <ForgetPwdContainer>
        <LoginHeader back={()=>{this.props.history.go(-1)}} text="忘记密码"></LoginHeader>
        <ul>
          <li>
            <PhoneItem></PhoneItem>
          </li>
        </ul>
      </ForgetPwdContainer>
    )
  }
}
