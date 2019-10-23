import React, { Component } from 'react'
import { BindingContainer } from './StyledBinding'
import BindHead from '../BindHead'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import TrueBind from './component/TrueBind'
import Notice from './component/Notice'

export default class Binding extends Component {


  toNotice = ()=>{
    console.log(this)
    this.props.history.push('/userbind/binding/notice')
  }

  render() {
    let path = this.props.match.path
    return (
      <BindingContainer>
        <BindHead
          text="绑定另一半"
          back={()=>{this.props.history.go(-1)}}
          notice="true"
          toNotice={this.toNotice}
        ></BindHead>
        <div className="bind-wrap">
          <Switch>
            <Route path={`${path}/bind`} component={TrueBind}></Route>
            <Route path={`${path}/notice`} component={Notice}></Route>
            <Redirect exact from={path} to={`${path}/bind`}></Redirect>
          </Switch>
        </div>
        
      </BindingContainer>
    )
  }
}
