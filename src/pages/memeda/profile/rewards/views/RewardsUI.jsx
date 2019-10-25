import React from 'react'

import StyledRewards from "./StyledRewards";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";
import ListItem from "pages/index/profile/components/list_item/ListItem";

import hongbao from "images/profile/rewards/hongbao.png";
import opened_hongbao from "images/profile/rewards/opened_hongbao.png";

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
            content: (props.received && props.received.login_reward) ? "已领取" : "领取"
          }}
          received={props.received && props.received.login_reward}
          haveReceived={props.haveReceived}
        ></ListItem>
        <ListItem
          listTitle="每日聊天领取红包"
          rightContent={{
            type: "btn",
            content: (props.received && props.received.chat_reward) ? "已领取" : "去完成"
          }}
          received={props.received && props.received.chat_reward}
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
                  content: "去完成"
                }}
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
            <div className="getHB">领取红包</div>
          </div>
          : ""
        }
        {
          props.received && props.received.showReward === "opened"
          ? <div className="reward" onClick={() => {
            if(props.opened)  props.opened()
          }}>
            <img src={opened_hongbao} alt=""/>
            <div className="openedHB">恭喜您获得红包1元<br/>零钱已存入恋爱基金</div>
          </div>
          : ""
        }
      </ul>
    </StyledRewards>
  );
}