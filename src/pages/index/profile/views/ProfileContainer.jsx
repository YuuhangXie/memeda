import React, { Component } from 'react';

import ProfileUI from "./ProfileUI";

import connect from "./connect";    //导入修饰器

@connect
class ProfileContainer extends Component {
  render() {
    // console.log(this.props.userList.toJS());
    return (
      <ProfileUI
        users={this.props.userList.toJS()}
        clickHead={this.handleClickHead}
      >
      </ProfileUI>
    )
  }

  componentDidMount() {
    this.props.loadUsersInfo();
  }

  handleClickHead(path) {
    this.history.push(`/memeda/profile${path}`);
  }
}

export default  ProfileContainer;