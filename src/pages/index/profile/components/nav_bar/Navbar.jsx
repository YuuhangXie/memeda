import React from 'react';

import StyledNavbar from "./StyledNavbar";

import arrow from "images/profile/main/arrow.png";
import camera from "images/profile/main/camera.png";

export default (props) => {
  return (
    <StyledNavbar>
      <img className="goback" src={arrow} alt="" onClick={() => {props.goBack()}} />
      <div className="navTitle">{props.navTitle}</div>

      {
        (() => {
          if(props.more) {
            return (
              <div className="rightBtn more" onClick={() => {
                props.remove()
              }}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            );
          }
          if(props.camera) {
            return (
              <img className="rightBtn camera" src={camera} alt="" onClick={() => {
                props.clickCarema()
              }} />
            );
          }
          if(props.cancel) {
            return (
              <div className="rightBtn cancel" onClick={() => {
                props.cancel()
              }}>取消</div>
            );
          }
        })()
      }
    </StyledNavbar>
  );
}
