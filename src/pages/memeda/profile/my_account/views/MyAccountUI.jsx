import React from "react";

import StyledMyAccount from "./StyledMyAccount";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";
import ListItem from "pages/index/profile/components/list_item/ListItem";
import Modal from "pages/memeda/profile/components/modal/Modal";

function MyAccountUI(props) {
  return (
    <StyledMyAccount>
      <Navbar
        navTitle="个人账户"
        goBack={props.goBack}
      ></Navbar>

      <ul>
        <ListItem
          listTitle="头像"
          rightArrow={true}
          cover={true}
          rightContent={{
            type: "img",
            content: props.userInfo && props.userInfo.head_img
          }}
          onlyClick={props.changeHead}
        ></ListItem>

        <ListItem
          listTitle="昵称"
          rightArrow={true}
          cover={true}
          rightContent={{
            type: "text",
            content: props.userInfo && props.userInfo.nickname
          }}
          onlyClick={props.changeName}
        ></ListItem>

        <ListItem
          listTitle="性别"
          rightContent={{
            type: "sex",
            content: props.userInfo && props.userInfo.sex,
            rightAlign: true
          }}
          changeSex={props.changeSex}
        ></ListItem>

        <ListItem
          listTitle="恩爱号"
          rightContent={{
            type: "text",
            content: props.userInfo && props.userInfo.lover_code,
            rightAlign: true
          }}
        ></ListItem>
      </ul>

      {
        props.cover ?
        <Modal
          type={props.type}
          clickCover={props.clickCover}
          confirmName={props.confirmName}
          confirmHeadImg={props.confirmHeadImg}
          multiple={props.multiple}
        ></Modal> :
        ""
      }
    </StyledMyAccount>
  );
}

export default MyAccountUI