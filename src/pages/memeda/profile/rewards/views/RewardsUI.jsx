import React from 'react'

import StyledRewards from "./StyledRewards";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";
import ListItem from "pages/index/profile/components/list_item/ListItem";

import hongbao from "images/profile/rewards/hongbao.png";

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
          haveReceived={props.haveReceived}
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
                haveReceived={props.haveReceived}
                key={index}
              ></ListItem>
            );
          })
          : ""
        }

        {
          props.received && props.received.showReward === "notOpen"
          ? <div className="reward" onClick={() => {
            if(props.open)  props.open()
          }}>
            <img src={hongbao} alt=""/>
            <div>领取红包</div>
          </div>
          : ""
        }
      </ul>
    </StyledRewards>
  );
}