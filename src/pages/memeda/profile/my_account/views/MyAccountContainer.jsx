import React, { Component } from 'react'

import storage from "utils/storage";

import MyAccountUI from "./MyAccountUI";

import "./modal.css";   //重置Modal组件样式

import connect from "./connect";

import ApiService from "utils/api.service";

@connect
class MyAccountContainer extends Component {
  state = {
    cover: false,
    type: ""
  }
  render() {
    return (
      <MyAccountUI
        goBack={this.handleGoBack.bind(this)}
        changeHead={this.handleChangeHead.bind(this)}
        changeName={this.handleChangeName.bind(this)}
        changeSex={this.handleChangeSex.bind(this)}
        userInfo={this.props.userInfo}
        cover={this.state.cover}
        type={this.state.type}
        clickCover={this.handleClickCover.bind(this)}
        confirmName={this.handleConfirmName.bind(this)}
        confirmHeadImg={this.handleConfirmHeadImg.bind(this)}
        multiple={false}
      >
      </MyAccountUI>
    )
  }

  componentDidMount() {
    this.userId = storage.get("user_id");
    if(storage.get("userInfo")) {
      this.props.getUsersInfoFromStorage();
    }
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  handleChangeHead() {
    // alert("更换头像");
    this.setState({
      type: "operation",
      cover: true
    });
  }

  handleChangeName() {
    // alert("更换昵称");
    this.setState({
      type: "prompt",
      cover: true
    });
  }

  handleChangeSex(sex) {
    this.setState({
      sex
    }, () => {
      this.props.changeUsersInfo(this.userId, {
        sex
      });
    });
  }

  handleClickCover() {
    this.setState({
      cover: false
    });
  }

  handleConfirmName(name) {
    if(name) {
      this.setState({
        username: name,
        cover: false
      }, () => {
        this.props.changeUsersInfo(this.userId, {
          nickname: name
        });
      });
    }
    else {
      alert("昵称不能为空!");
    }
  }

  async handleConfirmHeadImg(files) {
    if(!files)  return
    if(files[0].name.match(/\.jpg|\.gif|\.png|\.bmp/i)) {
      let data = new FormData();
      let arr = files[0].name.split(".");
      let ext = arr[arr.length - 1];
      let randomNum = parseInt(Math.random() * 100000);
      data.append('img_name', `profile_headimg_${randomNum}`);
      data.append('img', files[0]);
      let result = await ApiService.customRequest({
        url: '/pic/photo/save',
        method: 'post',
        headers: {
          'content-type': 'multipart/form-data'
        },
        data
      });
      if(result.ret) {
        this.props.changeUsersInfo(this.userId, {
          head_img: `http://lvyunfei.com/pic/profile_headimg_${randomNum}.${ext}`
        });
      }
      this.setState({
        cover: false
      });
    } else {
      alert("请选择正确的图片格式!");
    }
  }
}

export default  MyAccountContainer