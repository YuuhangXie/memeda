import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// 引入全屏组件
import Home from '../home/Home'
import { Profile } from "../profile/"
import { Gift } from '../gift/index.js'
import { Album } from '../album/index.js'
import { Diary } from '../diary/index.js'
import { Anniversary } from '../anniversary/index.js'
import Period from '../period/view/Index'
import { Chat } from '../../memeda/chat/'


export default class Memeda extends Component {
  render() {
    let path = this.props.match.path
    return (
      <Switch>
        <Route path={`${path}/home`} component={Home}></Route>
        <Route path={`${path}/profile`} component={Profile}></Route>    {/*后续再完善三级路由*/}
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
