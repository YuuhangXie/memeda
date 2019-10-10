import React from "react";

import StyledMyAccount from "./StyledMyAccount";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";
import ListItem from "pages/index/profile/components/list_item/ListItem";

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
            content: props.userInfo.head_address
          }}
          onlyClick={props.onlyClick}
        ></ListItem>

        <ListItem
          listTitle="昵称"
          rightArrow={true}
          cover={true}
          rightContent={{
            type: "text",
            content: props.userInfo.username
          }}
          onlyClick={props.onlyClick}
        ></ListItem>

        <ListItem
          listTitle="性别"
          rightContent={{
            type: "sex",
            content: props.userInfo.sex,
            rightAlign: true
          }}
          changeSex={props.changeSex}
        ></ListItem>

        <ListItem
          listTitle="恩爱号"
          rightContent={{
            type: "text",
            content: props.userInfo.usercode,
            rightAlign: true
          }}
        ></ListItem>
      </ul>
    </StyledMyAccount>
  );
}

export default MyAccountUI