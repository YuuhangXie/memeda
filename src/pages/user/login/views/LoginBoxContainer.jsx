import React, { PureComponent } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginBoxContainer from './StyledLoginBox'
import TrueLogin from './components/trueLogin/LoginUI'
import DynamicPwd from './components/dynamic/DynamicPwd'
import ForgetPwd from './components/forget/ForgetPwd'

export default class LoginBox extends PureComponent {
  render() {
    let path = this.props.match.path
    return (
      <LoginBoxContainer>
        <div>
          <Switch>
            <Route path={`${path}/login`} component={TrueLogin}></Route>
            <Route path={`${path}/dynpwd`} component={DynamicPwd}></Route>
            <Route path={`${path}/forgpwd`} component={ForgetPwd}></Route>
            <Redirect exact from={path} to={`${path}/login`}></Redirect>
          </Switch>
        </div>
      </LoginBoxContainer>
    )
  }
}
