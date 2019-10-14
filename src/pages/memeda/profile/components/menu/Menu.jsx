import React from "react";

import { StyledMenu, BorderedMenuItem } from "./StyledMenu";

import Cover from "../cover/Cover";

export default (props) => {
  if(!props.menulist)
    return false;
  let length = props.menulist.length;
  let _temparr = length > 1 ? props.menulist.slice(0, length-1) : [];
  return (
    <Cover
      clickCover={props.clickCover}
    >
      <StyledMenu onClick={(e) => {
        e.stopPropagation()
      }}>
        {
          _temparr.map((item, index) => {
            return (
              <BorderedMenuItem key={index}>
                {item}
                {
                  item === "拍照" ? <input type="file" accept="image/*" capture="camera" onClick={() => {
                    if(props.clickCover)
                      props.clickCover()
                  }} /> : ""
                }
                {
                  item === "从相册选择" ? <input type="file" accept="image/*" onClick={() => {
                    if(props.clickCover)
                      props.clickCover()
                  }} /> : ""
                }
              </BorderedMenuItem>
            );
          })
        }
        <span onClick={() => {
          if(props.drop)
            props.drop()
          if(props.clickCover)
            props.clickCover()
        }}>
          {props.menulist[length - 1]}
          {
            props.menulist[length - 1] === "拍照" ? <input type="file" accept="image/*" capture="camera" onClick={() => {
              if(props.clickCover)
                props.clickCover()
            }} /> : ""
          }
          {
            props.menulist[length - 1] === "从相册选择" ? <input type="file" accept="image/*" onClick={() => {
              if(props.clickCover)
                props.clickCover()
            }} /> : ""
          }
        </span>
        <span className="cancel" onClick={() => {
          if(props.clickCover)
            props.clickCover()
        }}>取消</span>
      </StyledMenu>
    </Cover>
  );
}