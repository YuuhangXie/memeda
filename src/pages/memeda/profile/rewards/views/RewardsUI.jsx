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
            content: (props.received && props.received.received1) ? "已领取" : "领取"
          }}
          received={props.received && props.received.received1}
        ></ListItem>
        {
          props.missionList
          ? props.missionList.map((item, index) => {
            return (
              <ListItem
                listTitle={item}
                rightContent={{
                  type: "btn",
                  content: (props.received && props.received[`reveived${index+2}`]) ? "已领取" : "去完成"
                }}
                received={props.received && props.received[`reveived${index+2}`]}
                key={index}
              ></ListItem>
            );
          })
          : ""
        }
      </ul>
    </StyledRewards>
  );
}