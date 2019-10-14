import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Index from '../components/index'
import Add from '../components/add'

export default class Home extends Component {
  render() {
    let path = this.props.match.path
    return (
      <Switch>
        <Route path={`${path}/index`} component={Index}></Route>
        <Route path={`${path}/add`} component={Add}></Route>
        <Redirect exact from={path} to={`${path}/index`}></Redirect>
      </Switch>
    )
  }
}