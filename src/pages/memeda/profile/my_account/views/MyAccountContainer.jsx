import React, { Component } from 'react'

import storage from "utils/storage";

import MyAccountUI from "./MyAccountUI";

// import { Modal } from "antd-mobile";

// import "./modal.css";   //重置Modal组件样式

export default class MyAccountContainer extends Component {
  state = {
    userInfo: storage.get("userlist")[0]
  }
  render() {
    return (
      <MyAccountUI
        goBack={this.handleGoBack.bind(this)}
        changeHead={this.handleChangeHead.bind(this)}
        changeName={this.handleChangeName.bind(this)}
        changeSex={this.handleChangeSex.bind(this)}
        userInfo={this.state.userInfo}
      >
      </MyAccountUI>
    )
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  handleChangeHead() {
    alert("更换头像");
    // const operation = Modal.operation;
    // operation([
    //   { text: '拍照', onPress: () => console.log('拍照') },
    //   { text: '从相册选择', onPress: () => console.log('从相册选择') },
    //   { text: '取消'},
    // ])
  }

  handleChangeName() {
    alert("更换昵称");
    // const prompt = Modal.prompt;
    // prompt(
    //   '修改昵称',
    //   '',
    //   [
    //     { text: '取消' },
    //     { text: '提交',
    //       onPress: (text) => {
    //         // console.log(`昵称为:${text}`)
    //         if(!text) {
    //           alert("昵称不能为空!");
    //         }
    //         else{
    //           this.state.userInfo = {
    //             ...this.state.userInfo,
    //             username: text
    //           };
    //           this.setState({}, () => {
    //             // alert("更改性别为" + sex);
    //             // console.log(this.state.userInfo);
    //             storage.set("userlist", [
    //               this.state.userInfo,
    //               storage.get("userlist")[1]
    //             ]);
    //           });
    //         }
    //       }
    //     }
    //   ],
    //   'default', null, ['请输入']
    // )
  }

  handleChangeSex(sex) {
    this.state.userInfo = {
      ...this.state.userInfo,
      sex
    };
    this.setState({}, () => {
      // alert("更改性别为" + sex);
      // console.log(this.state.userInfo);
      storage.set("userlist", [
        this.state.userInfo,
        storage.get("userlist")[1]
      ]);
    });
  }
}