import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Index from '../components/index/index'
import Add from '../components/add/add'
import Watch from '../components/watch/watch'

export default class Album extends Component {
  render() {
    let path = this.props.match.path
    return (
      <Switch>
        <Route path={`${path}/index`} component={Index}></Route>
        <Route path={`${path}/add`} component={Add}></Route>
        <Route path={`${path}/watch`} component={Watch}></Route>
        <Redirect exact from={path} to={`${path}/index`}></Redirect>
      </Switch>
    )
  }
}