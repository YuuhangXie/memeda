import React from 'react'

import StyledRewards from "./StyledRewards";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";
import ListItem from "pages/index/profile/components/list_item/ListItem";

export default (props) => {
  return (
    <StyledRewards>
      <Navbar 
        navTitle="任务奖励"
        goBack={props.goBack}
      ></Navbar>
      
      <ul>
        <ListItem
          listTitle="每日登录领取红包"
          rightContent={{
            type: "btn",
            content: "领取"
          }}
        ></ListItem>
        {
          props.missionList
          ? props.missionList.map((item) => {
            return (
              <ListItem
                listTitle={item}
                rightContent={{
                  type: "btn",
                  content: "去完成"
                }}
              ></ListItem>
            );
          })
          : ""
        }
      </ul>
    </StyledRewards>
  );
}