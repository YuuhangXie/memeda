import React from "react";

import {
    GiftContainer
} from '../../view/StyledGift'
  
import Picture from '../picture'
  
import Back from 'images/gift/back.png'

function IndexUI(props) {
    return(
        <GiftContainer>
            <div className="gift-container">
                <div className="header-container">
                  <div className="back" onClick={() => props.clickHandler()}>
                    <img src={Back} alt="返回"/>
                  </div>
                  <span className="title">愿望清单</span>
                </div>
                <div className="gift-body">
                  <div className="body-container">
                    <div className="our-wish wish-box"  onClick={() => {props.loadRouter( '/memeda/gift/wish?our')}}>
                      <div className="ava-container"  onClick={(e) => props.modificationPage(e, 0)}>
                        <img src={props.indexMsg.giftAva[0].imgAddress} alt="头像"/>
                      </div>
                      <span>我们的愿望</span>
                    </div>
                    <div className="my-wish wish-box"  onClick={() => {props.loadRouter( '/memeda/gift/wish?my')}}>
                      <div className="ava-container"  onClick={(e) => props.modificationPage(e, 1)}>
                        <img src={props.indexMsg.giftAva[1].imgAddress} alt="头像"/>
                      </div>
                      <span>我的愿望</span>
                    </div>
                    <div className="ta-wish wish-box"  onClick={() => {props.loadRouter( '/memeda/gift/wish?ta')}}>
                      <div className="ava-container"  onClick={(e) => props.modificationPage(e, 2)}>
                        <img src={props.indexMsg.giftAva[2].imgAddress} alt="头像"/>
                      </div>
                      <span>他的愿望</span>
                    </div>  
                  </div>
                </div>
            </div> 
            <div className={props.indexMsg.hide ? "hideAva" : "gift-component"}>
              <Picture
                changeProps={(e) => props.modificationPage(e)}
                indexMsg={props.indexMsg}
              ></Picture>
            </div>
        </GiftContainer>
    )
}

export default IndexUI