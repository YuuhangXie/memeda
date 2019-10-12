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
              <input type="file" accept="image/*" capture="camera" onClick={() => {
                props.clickCover()
              }} />
            </span>
            <BorderedSpan>
              从相册选择
              <input type="file" accept="image/*" onClick={() => {
                props.clickCover()
              }} />
            </BorderedSpan>
            <span onClick={() => {
              props.clickCover()
            }}>取消</span>
          </> :
          <>
            <h5 className="title">修改昵称</h5>
            <input type="text" ref={iptRef} placeholder="请输入" autoFocus />
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