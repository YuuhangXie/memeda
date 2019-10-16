import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Index from '../components/index'
import Wish from '../components/ourWish/ourWishContainer'
// import MyWish from '../components/myWish'
// import TaWish from '../components/taWish'
import Add from '../components/add'

export default class Home extends Component {
  render() {
    let path = this.props.match.path
    return (
      <Switch>
        <Route path={`${path}/index`} component={Index}></Route>
        <Route path={`${path}/wish`} component={Wish}></Route>
        <Route path={`${path}/add`} component={Add}></Route>
        {/* <Route path={`${path}/mywish`} component={MyWish}></Route>
        <Route path={`${path}/tawish`} component={TaWish}></Route> */}
        <Redirect exact from={path} to={`${path}/index`}></Redirect>
      </Switch>
    )
  }
}