import React from "react";

import Cover from "../cover/Cover";

import { StyledModal, BorderedSpan, BorderedBtnBox, BorderBtn} from "./StyledModal";

export default (props) => {
  let iptRef = React.createRef();

  return (
    <Cover
      clickCover={props.type === "operation" ? props.clickCover : ""}
    >
      <StyledModal onClick={(e) => {
        e.stopPropagation()
      }}>
        {
          props.type === "operation" ?
          <>
            <span>
              拍照
              <input id="camera-img" type="file" accept="image/*" capture="camera" multiple={props.multiple} onChange={(e) => {
                if(props.confirmHeadImg)  props.confirmHeadImg(e.target.files)
              }} />
            </span>
            <BorderedSpan>
              从相册选择
              <input id="album-img" type="file" accept="image/*" multiple={props.multiple} onChange={(e) => {
                if(props.confirmHeadImg)  props.confirmHeadImg(e.target.files)
              }} />
            </BorderedSpan>
            <span onClick={() => {
              props.clickCover()
            }}>取消</span>
          </> :
          <>
            <h5 className="title">修改昵称</h5>
            <input type="text" className="change-name" ref={iptRef} placeholder="请输入" autoFocus onKeyDown={(e) => {
                if(e.keyCode === 13)
                  props.confirmName(iptRef.current.value)
            }} />
            <BorderedBtnBox>
              <BorderBtn onClick={() => {
                props.clickCover()
              }}>取消</BorderBtn>
              <span onClick={() => {
                props.confirmName(iptRef.current.value)
              }}>确定</span>
            </BorderedBtnBox>
          </>
        }
      </StyledModal>
    </Cover>
  );
}