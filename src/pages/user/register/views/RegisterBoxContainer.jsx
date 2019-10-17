import React, { Component } from 'react'

import RegisterBoxContainer from './StyledRegisterBox'

import RegisterHeader from './components/RegisterHeader'

export default class RegisterBox extends Component {



  handleBack = () => {
    this.props.history.go(-1)
  }


  render() {
    return (
      <RegisterBoxContainer>
        <div>
          <RegisterHeader back={this.handleBack}></RegisterHeader>
        </div>
      </RegisterBoxContainer>
    )
  }
}
