import React, { Component } from 'react'
import DynamicPwdContainer from './StyledDynamic'
import LoginHeader from '../LoginHeader'


export default class DynamicPwd extends Component {
  render() {
    return (
      <DynamicPwdContainer>
        <LoginHeader back={()=>{this.props.history.go(-1)}} text="动态密码"></LoginHeader>
        DynamicPwd
      </DynamicPwdContainer>
    )
  }
}
