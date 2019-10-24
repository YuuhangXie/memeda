import React from "react";

import StyledStore from "./StyledStore";

import { PullToRefresh } from 'antd-mobile';

export default (props) => {
  return (
    <StyledStore>
      <PullToRefresh
        direction="up"
        onRefresh={props.pullUp}
        damping={50}
        distanceToRefresh={50}
        indicator={props.finished
          ? {
          activate: "松开加载",
          deactivate: "上拉加载更多",
          finish: "我也是有底线的!"
          } : {
            activate: "松开加载",
            deactivate: "上拉加载更多",
            finish: "加载成功"
          }
        }
      >
        {
          props.productList.map((item) => {
            return (
              <div key={item.productId} className="item">
                <img src={item.productImg} alt=""/>
                <div>
                  <span className="productClass">{item.productClass}</span>
                  <span className="productName">{item.productName}</span>
                  <span className="discountPrice">￥{item.discountPrice || item.price}</span>
                  <span className="price">{item.discountPrice ? "￥" + item.price : ""}</span>
                  <span className="buy-btn">立即购买</span>
                </div>
              </div>
            );
          })
        }
      </PullToRefresh>
    </StyledStore>
  );
}