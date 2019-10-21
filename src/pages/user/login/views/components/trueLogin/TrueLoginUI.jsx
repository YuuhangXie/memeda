import React from 'react'
import { TrueLoginContainer as TrueLogin, BorderLi, BorderDiv } from './StyledTrueLogin'
// import PhoneIcon from 'images/login/login-icon1.png'
import PhoneItem from '../PhoneItemContainer'
import PwdIcon from 'images/login/login-icon3.png'
import ApiService from 'utils/api.service'
import Storage from 'utils/storage'


class TrueLoginUI extends React.Component{
  state={
    phoneNum: '',
    passNum: ''
  }

  getPhone = (value) => {
    console.log(value)
    this.setState({
      phoneNum: value
    })
  }

  passChange=(e)=>{
    this.setState({
      passNum: e.target.value
    })
  }

  clearPhone= ()=>{
    this.setState({
      passNum: '',
      phoneNum: ''
    })
  }
  
  handleLogin= async()=>{
    console.log(this.state)
    try{
      let result = await ApiService.get('/userlist/' + this.state.phoneNum.replace(/\s*/g,""))
      if(result.password === this.state.passNum){
        Storage.set('isSign', true)
        Storage.set('user_id', result.id)
        this.props.history.push('/userbind')
      } else {
        alert("用户名或密码不正确")
      }
    }
    catch(err){
      alert("请先注册")
    }
  
  }

  render() {
    return (
      <TrueLogin>
        <div className="login-title">
          <h1>么么哒</h1>
          <p className="login-love">一生一爱，热吻如初</p>
          <p className="login-text">情侣恋爱神器</p>
        </div>
        <ul className="login-form">
          <BorderLi>
            <PhoneItem 
              noGetvali="true" 
              getPhone={(value)=>{this.getPhone(value)}}
              clearPhone={this.clearPhone}
            ></PhoneItem>
          </BorderLi>
          <BorderLi>
            <i>
              <img src={PwdIcon} alt="密码"/>
            </i>
            <input type="password" placeholder="输入密码" value={this.state.passNum} onChange={this.passChange}/>
          </BorderLi>
          <li className="login-else">
            <span onClick={()=>{this.props.history.push('/login/dynpwd')}}>动态密码</span>
            <span onClick={()=>{this.props.history.push('/login/forgpwd')}}>忘记密码？</span>
          </li>
          <li className="login-log">
            <div onClick={this.handleLogin}>登录</div>
          </li>
          <li className="login-reg">
            <BorderDiv onClick={()=>{this.props.history.push('/register')}}>注册</BorderDiv>
          </li>
        </ul>
      </TrueLogin>
    )


  }
}

export default TrueLoginUI