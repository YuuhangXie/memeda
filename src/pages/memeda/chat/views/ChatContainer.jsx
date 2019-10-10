import React, { Component } from 'react'

import {ChattingCon} from './StyledChat'

import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '../component/Home'
import History from '../component/History'
import Background from '../component/Background'

export default class ChatContainer extends Component {

  render() {
    let {path} = this.props.match
    return (
      <ChattingCon>
       
        <Switch>
          <Route path={`${path}/home`} component={Home}></Route>
          <Route path={`${path}/history`} component={History}></Route>
          <Route path={`${path}/background`} component={Background}></Route>
          <Redirect from={path} exact to={`${path}/home`}></Redirect>
        </Switch>

      </ChattingCon>
    )
  }
}
