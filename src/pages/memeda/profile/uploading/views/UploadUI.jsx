import React from 'react'

import StyledUpload from "./StyledUpload";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";
import Menu from "pages/memeda/profile/components/menu/Menu";

//图片导入
import img1 from "images/profile/upload-images/upload-img1.png";
import img2 from "images/profile/upload-images/upload-img2.png";
import img3 from "images/profile/upload-images/upload-img3.png";
import upload from "images/profile/upload-images/upload.png";
import cancel from "images/profile/upload-images/cancel.png";

export default (props) => {
  return (
    <StyledUpload>
        <Navbar 
          navTitle="上传启动画面"
          goBack={props.goBack}
          camera={props.camera}
          clickCarema={props.clickCarema}
        ></Navbar>

        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={img1} alt=""/>
                </div>
                <div className="swiper-slide">
                  <img src={img2} alt=""/>
                </div>
                <div className="swiper-slide">
                  <img src={img3} alt=""/>
                </div>
            </div>
            {/* 分页器 */}
            <div className="swiper-pagination"></div>
        </div>

        <div className="notify">立即设置你们的专属画面</div>

        <div className="btns">
          <img src={cancel} alt="" onClick={() => {
            if(props.cancel)
              props.cancel()
          }} />
          <img src={upload} alt="" onClick={() => {
            if(props.upload)
              props.upload()
          }} />
        </div>

        {
          props.cover && <Menu
            clickCover={props.clickCover}
            menulist={["拍照", "从相册选择"]}
            confirmHeadImg={props.confirmHeadImg}
            multiple={props.multiple}
          ></Menu>
        }
      </StyledUpload>
  );
}