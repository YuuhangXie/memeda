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
                  item === "拍照" ? <input type="file" accept="image/*" capture="camera" onChange={(e) => {
                    if(props.confirmHeadImg)  props.confirmHeadImg(e.target.files)
                  }} /> : ""
                }
                {
                  item === "从相册选择" ? <input type="file" accept="image/*" onChange={(e) => {
                    if(props.confirmHeadImg)  props.confirmHeadImg(e.target.files)
                  }} /> : ""
                }
              </BorderedMenuItem>
            );
          })
        }
        <span onClick={() => {
          if(props.drop)
            props.drop()
        }}>
          {props.menulist[length - 1]}
          {
            props.menulist[length - 1] === "拍照" ? <input type="file" accept="image/*" capture="camera" multiple={props.multiple} onChange={(e) => {
              if(props.confirmHeadImg)  props.confirmHeadImg(e.target.files)
            }} /> : ""
          }
          {
            props.menulist[length - 1] === "从相册选择" ? <input type="file" accept="image/*" multiple={props.multiple} onChange={(e) => {
              if(props.confirmHeadImg)  props.confirmHeadImg(e.target.files)
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