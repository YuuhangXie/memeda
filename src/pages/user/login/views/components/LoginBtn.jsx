import React, { Component } from 'react'
import FormContainer from './StyledForm'
import PhoneItem from 'pages/user/components/Login/LoginItem/LoginItem'

export default class LoginForm extends Component {
  render() {
    return (
      <FormContainer>
        <form className="loginForm" action="">
          <PhoneItem></PhoneItem>
          <PhoneItem></PhoneItem>
          <PhoneItem></PhoneItem>
          <PhoneItem></PhoneItem>
        </form>

      </FormContainer>
    )
  }
}
