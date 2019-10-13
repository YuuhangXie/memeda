// import React, {PureComponent} from 'react'
// import {
//   Route,
//   Redirect,
//   Switch
// } from 'react-router-dom'

// export default function LoginContainer(props) {
//   let path = props.match.path
//   return (
//     <div>
//       {path}
//     </div>
//   )
// }


import React, { PureComponent } from 'react'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import LoginUI from './LoginUI'
import DynamicPwd from '../dynamic/DynamicPwd'
import ForgetPwd from '../forget/ForgetPwd'

export default class Login extends PureComponent {
  render() {
    let path = this.props.match.path
    return (
      <div>
        <Switch>
          <Route path={`${path}/login`} component={LoginUI}></Route>
          <Route path={`${path}/dynpwd`} component={DynamicPwd}></Route>
          <Route path={`${path}/forgpwd`} component={ForgetPwd}></Route>
          <Redirect exact from={path} to={`${path}/login`}></Redirect>
        </Switch>
      </div>
    )
  }

}
