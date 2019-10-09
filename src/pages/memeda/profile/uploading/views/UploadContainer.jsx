import React, { Component } from 'react'

import StyledUpload from "./StyledUpload";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";

export default class Upload extends Component {
  state = {
    showCarema: true
  }
  render() {
    return (
      <StyledUpload>
        <Navbar 
          navTitle="上传启动画面"
          goBack={this.handleGoBack.bind(this)}
          camera={this.state.showCarema}
          clickCarema={this.handleClickCarema.bind(this)}
        ></Navbar>
      </StyledUpload>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  handleClickCarema() {
    this.setState({
      showCarema: false
    }, () => {
      alert("点击选择图片");
    });
  }
}
