import React, { Component } from 'react'
import DynamicPwdContainer from './StyledDynamic'
import LoginHeader from '../LoginHeader'
import ValiIcon from 'images/login/login-icon2.png'
import PhoneItem from '../PhoneItemContainer'
import {BorderLi} from '../../StyledLoginBox'

export default class DynamicPwd extends Component {
  state={
    phoneNum: '',
    passNum: ''
  }


  getPhone = (value) => {
    this.setState({
      phoneNum: value
    })
  }

  clearPhone= ()=>{
    this.setState({
      passNum: '',
      phoneNum: ''
    })
  }

  render() {
    return (
      <DynamicPwdContainer>
        <LoginHeader back={()=>{this.props.history.go(-1)}} text="动态密码"></LoginHeader>
        <ul className="dynamic-form">
          <BorderLi>
            <PhoneItem
              getPhone={(value)=>{this.getPhone(value)}}
              clearPhone={this.clearPhone}
            ></PhoneItem>
          </BorderLi>
          <BorderLi>
            <i>
              <img src={ValiIcon} alt="验证码"/>
            </i>
            <input type="password" placeholder="输入验证码"/>
          </BorderLi>
          <li className="dynamic-btn">
            <div>确认</div>
          </li>
        </ul>
      </DynamicPwdContainer>
    )
  }
}
