import React from 'react'

import StyledSettings from "./StyledSettings";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";
import ListItem from "pages/index/profile/components/list_item/ListItem";

export default (props) => {
  let _temparr = ["账号与安全", "新消息通知", "意见反馈", "用户帮助", "我的收货地址"];
  return (
    <StyledSettings>
      <Navbar 
        navTitle="设置"
        goBack={props.goBack}
      ></Navbar>

      <ul>
        {
          _temparr.map((item, index) => {
            return (
              <ListItem
                rightArrow={true}
                key={index}
                listTitle={item}
              ></ListItem>
            );
          })
        }
      </ul>
    </StyledSettings>
  )
}