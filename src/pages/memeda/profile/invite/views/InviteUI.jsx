import React from 'react'

import StyledInvite from "./StyledInvite";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";

import invite from "images/profile/invite/invite.png";
import save from "images/profile/invite/save.png";
import wechat from "images/profile/invite/wechat.png";

export default (props) => {
  return (
    <StyledInvite>
      <Navbar
        navTitle="邀请好友"
        goBack={props.goBack}
      ></Navbar>

      <img src={invite} alt=""/>
      
      <span>邀请好友注册成功你将获得红包</span>

      <div className="invite-code">
        邀请码:&nbsp;&nbsp;&nbsp;{props.invite_code}
        <span onClick={() => {
          if(props.copy)  props.copy(props.invite_code)
        }}>复制</span>
      </div>

      <div className="btns">
        <img src={save} alt=""/><img src={wechat} alt=""/><br/>
        <span>保存本地</span><span>微信分享</span>
      </div>
    </StyledInvite>
  );
}