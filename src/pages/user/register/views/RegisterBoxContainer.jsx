import React, { Component } from 'react'

import {RegisterBoxContainer, BorderLi} from './StyledRegisterBox'

import RegisterHeader from './components/RegisterHeader'
import PhoneItem from './components/PhoneItemContainer'
import ValiIcon from 'images/login/login-icon2.png'
import PwdIcon from 'images/login/login-icon3.png'

import ApiService from 'utils/api.service'




export default class RegisterBox extends Component {

  state = {
    phoneNum: null,
    hostValidate: null,
    validate:'',
    passNum: '',
    rePassNum: ''
  }

  handleBack = () => {
    this.props.history.go(-1)
  }

  handleRegister = async()=>{
    let checkPhone = ""
    try{
      checkPhone = await ApiService.get('/userlist/' + this.state.phoneNum)
    }catch(err){
      console.log('未注册')
    }
    
    if(!checkPhone){
      let { phoneNum, hostValidate, validate, passNum, rePassNum } = this.state
      if(phoneNum && hostValidate === validate) {
        if(passNum && passNum === rePassNum){
          let loverCode = Math.ceil(Math.random()*(1000000-100000)+100000)
          let inviteCode = Math.ceil(Math.random()*(1000000-100000)+100000)
          let data = {
            "id": Number(phoneNum),
            "password": passNum,
            "nickname": "",
            "sex": "",
            "head_img": "",
            "age": "",
            "lover_code": loverCode,
            "invite_code": inviteCode,
            "bind_status": false,
            "fund_status": false,
            "will_bind_info": "",
            "invited_to_bind":"",
            "bind_info": {
              "id": "",
              "sex": "",
              "nickname": "",
              "head_img": "",
              "age": "",
              "lover_code": ""
            }
          }
          await ApiService.post('/userlist', data)
          this.props.history.push('/login/login')
        } else {
          alert("密码不一致")
        }
      } else {
        alert("请输入正确的手机号与验证码")
      }
    }else{
      alert('您已注册，请登录！')
    }



  }

  getPhone = (val) => {
    this.setState({
      phoneNum: val
    })
  }
  
  getValidate = (val) => {
    this.setState({
      hostValidate: val
    })
  }

  valiChange = (e) => {
    this.setState({
      validate: e.target.value
    })
  }
  
  passChange = (e) => {
    this.setState({
      passNum: e.target.value
    })
  }

  rePassChange = (e) => {
    this.setState({
      rePassNum: e.target.value
    })
  }

  // checkPass = () => {
  //   if(this.state.passNum !== this.state.rePassNum) {
  //     alert("密码不一致")
  //   }
  // }
  
  


  render() {
    return (
      <RegisterBoxContainer>
        <div>
          <RegisterHeader back={this.handleBack}></RegisterHeader>
          <ul className="register-form">
            <BorderLi>
              <PhoneItem 
                getValidate={this.getValidate}
                getPhone={this.getPhone}
              ></PhoneItem>
            </BorderLi>
            <BorderLi>
              <i>
                <img src={ValiIcon} alt="验证码"/>
              </i>
              <input 
                type="password"
                placeholder="输入验证码"
                value={this.state.validate}
                onChange={this.valiChange}
              />
            </BorderLi>
            <BorderLi>
              <i>
                <img src={PwdIcon} alt="密码"/>
              </i>
              <input 
                type="password"
                placeholder="输入密码"
                value={this.state.passNum}
                onChange={this.passChange}
              />
            </BorderLi>
            <BorderLi>
              <i>
                <img src={PwdIcon} alt="确认密码"/>
              </i>
              <input 
                type="password" 
                placeholder="确认密码"
                value={this.state.rePassNum}
                onChange={this.rePassChange}
              />
            </BorderLi>
            <li className="login-reg">
              <div onClick={this.handleRegister}>注册</div>
            </li>
          </ul>
        </div>
      </RegisterBoxContainer>
    )
  }
}
