import React from 'react';

import StyledProfile from "./StyledProfile";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";
import ListItem from "pages/index/profile/components/list_item/ListItem";

import link from "assets/images/profile/main/link.png";

function ProfileUI(props) {

  return (
    <StyledProfile>
      <Navbar navTitle="我" goBack={props.goBack} />

      <div className="users">
        <img src={link} alt="" className="link"/>
        <div className="userInfo" onClick={() => {
          props.clickJump("/myAccount")
        }}>
          <img src={props.users[0] ? props.users[0].head_address : "http://placehold.it/52x52"} alt="" className="head"/>
          <div className="infoText">
            <span className="username">{props.users[0] ? props.users[0].username : ""}</span>
            <span className="usercode">{props.users[0] ? props.users[0].usercode : ""}</span>
          </div>
        </div>
        <div className="userInfo" onClick={() => {
          props.clickJump("/taAccount")
        }}>
          <div className="infoText">
            <span className="username">{props.users[1] ? props.users[1].ta_username : ""}</span>
            <span className="usercode">{props.users[1] ? props.users[1].ta_usercode : ""}</span>
          </div>
          <img src={props.users[1] ? props.users[1].head_address : "http://placehold.it/52x52"} alt="" className="head"/>
        </div>
      </div>

      <ul>
        <ListItem
          listTitle="设置"
          rightArrow={true}
          icon="settings"
          jumpEvent={props.clickJump}
        ></ListItem>
        <ListItem
          listTitle="上传启动画面"
          rightArrow={true}
          icon="upload"
          jumpEvent={props.clickJump}
        ></ListItem>
        <ListItem
          listTitle="任务奖励"
          rightArrow={true}
          icon="rewards"
          jumpEvent={props.clickJump}
        ></ListItem>
        <ListItem
          listTitle="邀请好友"
          rightArrow={true}
          icon="invite"
          jumpEvent={props.clickJump}
        ></ListItem>
      </ul>

      <ul>
        <ListItem
          listTitle="求婚戒指"
          rightArrow={true}
          icon="rings"
          jumpEvent={props.clickJump}
        ></ListItem>
        <ListItem
          listTitle="八字姻缘"
          rightArrow={true}
          icon="marriage"
          jumpEvent={props.clickJump}
        ></ListItem>
        <ListItem
          listTitle="情侣相册打印"
          rightArrow={true}
          icon="print"
          jumpEvent={props.clickJump}
        ></ListItem>
        <ListItem
          listTitle="我的订单"
          rightArrow={true}
          icon="orders"
          jumpEvent={props.clickJump}
        ></ListItem>
      </ul>
    </StyledProfile>
  );
}

export default ProfileUI;