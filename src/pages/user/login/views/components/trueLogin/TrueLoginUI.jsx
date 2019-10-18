import React from 'react'
import TrueLogin from './StyledTrueLogin'
import PhoneItem from '../PhoneItemContainer'
import PwdIcon from 'images/login/login-icon3.png'


class TrueLoginUI extends React.Component{

  toRegister = ()=>{
    this.props.history.push('/register')
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
          <li>
            <PhoneItem></PhoneItem>
          </li>
          <li>
            <i>
              <img src={PwdIcon} alt="密码"/>
            </i>
            <input type="password" placeholder="输入密码"/>
          </li>
          <li className="login-else">
            <span>动态密码</span>
            <span>忘记密码？</span>
          </li>
          <li className="login-log">
            <div>登录</div>
          </li>
          <li className="login-reg">
            <div onClick={this.toRegister}>注册</div>
          </li>
        </ul>
      </TrueLogin>
    )


  }
}

export default TrueLoginUI