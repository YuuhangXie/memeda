import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// 引入全屏组件
import Home from '../home/Home'
import Settings from "../profile/settings/Settings";

export default class Memeda extends Component {
  render() {
    let path = this.props.match.path
    return (
      <Switch>
        <Route path={`${path}/home`} component={Home}></Route>
        <Route path={`${path}/profile/settings`} component={Settings}></Route>    {/*后续再完善三级路由*/}
        <Redirect exact from={path} to={`${path}/home`}></Redirect>
      </Switch>
    )
  }
}
