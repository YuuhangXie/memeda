import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Index from '../components/index'
import OurWish from '../components/ourWish'
import MyWish from '../components/myWish'
import TaWish from '../components/taWish'

export default class Home extends Component {
  render() {
    let path = this.props.match.path
    return (
      <Switch>
        <Route path={`${path}/index`} component={Index}></Route>
        <Route path={`${path}/ourwish`} component={OurWish}></Route>
        <Route path={`${path}/mywish`} component={MyWish}></Route>
        <Route path={`${path}/tawish`} component={TaWish}></Route>
        <Redirect exact from={path} to={`${path}/index`}></Redirect>
      </Switch>
    )
  }
}