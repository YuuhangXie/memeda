import React from 'react'
import { TrueLoginContainer as TrueLogin, BorderLi, BorderDiv } from './StyledTrueLogin'
import PhoneItem from '../PhoneItemContainer'
import PwdIcon from 'images/login/login-icon3.png'


class TrueLoginUI extends React.Component{


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
            <PhoneItem></PhoneItem>
          </BorderLi>
          <BorderLi>
            <i>
              <img src={PwdIcon} alt="密码"/>
            </i>
            <input type="password" placeholder="输入密码"/>
          </BorderLi>
          <li className="login-else">
            <span onClick={()=>{this.props.history.push('/login/dynpwd')}}>动态密码</span>
            <span onClick={()=>{this.props.history.push('/login/forgpwd')}}>忘记密码？</span>
          </li>
          <li className="login-log">
            <div>登录</div>
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