import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { MyAccount } from "../my_account/";
import { TaAccount } from "../ta_account/";
import { Settings } from "../settings/";
import { Upload } from "../uploading/";
import { Rewards } from "../rewards/";
import { Invite } from "../invite/";
import { Rings } from "../rings/";
import { Marriage } from "../marriage/";
import { Print } from "../print/";
import { Orders } from "../orders/";

export default class ProfileContainer extends Component {
  render() {
    let path = this.props.match.path
    return (
      <Switch>
        <Route path={`${path}/myAccount`} component={MyAccount}></Route>
        <Route path={`${path}/taAccount`} component={TaAccount}></Route>
        <Route path={`${path}/settings`} component={Settings}></Route>
        <Route path={`${path}/upload`} component={Upload}></Route>
        <Route path={`${path}/Rewards`} component={Rewards}></Route>
        <Route path={`${path}/invite`} component={Invite}></Route>
        <Route path={`${path}/rings`} component={Rings}></Route>
        <Route path={`${path}/marriage`} component={Marriage}></Route>
        <Route path={`${path}/print`} component={Print}></Route>
        <Route path={`${path}/orders`} component={Orders}></Route>
      </Switch>
    )
  }
}
