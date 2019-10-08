import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// 引入全屏组件
import Home from '../home/Home'
import Settings from "../profile/settings/Settings"
import Gift from '../gift/view/index'
import Album from '../album/index'
import Diary from '../diary/index'
import Anniversary from '../anniversary/index'
import Period from '../period/view/Index'
import { Chat } from '../../memeda/chat/'


export default class Memeda extends Component {
  render() {
    let path = this.props.match.path
    return (
      <Switch>
        <Route path={`${path}/home`} component={Home}></Route>
        <Route path={`${path}/profile/settings`} component={Settings}></Route>    {/*后续再完善三级路由*/}
        <Route path={`${path}/gift`} component={Gift}></Route>
        <Route path={`${path}/album`} component={Album}></Route>
        <Route path={`${path}/diary`} component={Diary}></Route>
        <Route path={`${path}/anniversary`} component={Anniversary}></Route>
        <Route path={`${path}/period`} component={Period}></Route>
        <Route path={`${path}/chat`} component={Chat}></Route>
        <Redirect exact from={path} to={`${path}/home`}></Redirect>
      </Switch>
    )
  }
}
