import React, { Component } from 'react'
import {
  PeriodContainer
} from './StyledPeriod'

import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '../component/Home'
import Setting from '../component/Setting'

export default class Index extends Component {


  render() {
    let {path} = this.props.match
    return (
      <PeriodContainer>
       
        <Switch>
          <Route path={`${path}/home`} component={Home}></Route>
          <Route path={`${path}/setting`} component={Setting}></Route>
          <Redirect from={path} exact to={`${path}/home`}></Redirect>
        </Switch>

      </PeriodContainer>
    )
  }
}