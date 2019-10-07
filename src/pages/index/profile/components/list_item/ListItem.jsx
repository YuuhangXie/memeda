import React from "react";

import StyledListItem from "./StyledListItem";

import rightArrow from "images/profile/main/right-arrow.png";
import settings from "images/profile/main/settings.png";
import upload from "images/profile/main/upload.png";
import rewards from "images/profile/main/rewards.png";
import rings from "images/profile/main/rings.png";
import marriage from "images/profile/main/marriage.png";
import print from "images/profile/main/print.png";
import orders from "images/profile/main/orders.png";

export default (props) => {
  return (
    <StyledListItem>
      <div className="leftPart">
        {
          (() => {
            switch(props.icon) {
              case "settings":
                return (
                  <img className="settings" src={settings} alt=""/>
                );
              case "upload":
                return (
                  <img className="upload" src={upload} alt=""/>
                );
              case "rewards":
              case "invite":
                return (
                  <img className="rewards" src={rewards} alt=""/>
                );
              case "rings":
                return (
                  <img className="rings" src={rings} alt=""/>
                );
              case "marriage":
                return (
                  <img className="marriage" src={marriage} alt=""/>
                );
              case "print":
                return (
                  <img className="print" src={print} alt=""/>
                );
              case "orders":
                return (
                  <img className="orders" src={orders} alt=""/>
                );
              default:
            }
          })()
        }
        <div className="title">{props.listTitle}</div>
      </div>
      {
        props.rightArrow ? <img className="more" src={rightArrow} alt=""/> : ""
      }
      <div className="cover" onClick={() => {props.event(props.icon)}}></div>
    </StyledListItem>
  );
}