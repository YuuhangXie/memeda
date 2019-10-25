import React, { Component } from 'react'
import { UserBindContainer } from './StyledUserBind'
import {Route, Switch, Redirect} from 'react-router-dom'
import Setnick from './components/setnick/SetnickContainer'
import Binding from './components/binding/BindingContainer'

export default class UserBind extends Component {
  render() {
    let path = this.props.match.path
    return (
      <UserBindContainer>
         <Switch>
          <Route path={`${path}/setnick`} component={Setnick}></Route>
          <Route path={`${path}/binding`} component={Binding}></Route>
          <Redirect exact from={path} to={`${path}/setnick`}></Redirect>
        </Switch>
      </UserBindContainer>
    )
  }
}
