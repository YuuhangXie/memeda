import React from "react";

import StyledTaAccount from "./StyledTaAccount";

import Navbar from "pages/index/profile/components/nav_bar/Navbar";
import ListItem from "pages/index/profile/components/list_item/ListItem";

import Cover from "pages/memeda/profile/components/cover/Cover";

function TaAccountUI(props) {
  return (
    <StyledTaAccount>
      <Navbar
        navTitle="另一半账户"
        goBack={props.goBack}
        more={true}
        remove={props.remove}
      ></Navbar>

      <ul>
        <ListItem
          listTitle="头像"
          rightContent={{
            type: "img",
            content: props.userInfo.head_address
          }}
        ></ListItem>

        <ListItem
          listTitle="昵称"
          rightContent={{
            type: "text",
            content: props.userInfo.ta_username
          }}
        ></ListItem>

        <ListItem
          listTitle="性别"
          rightContent={{
            type: "sex",
            content: props.userInfo.sex
          }}
        ></ListItem>

        <ListItem
          listTitle="恩爱号"
          rightContent={{
            type: "text",
            content: props.userInfo.ta_usercode
          }}
        ></ListItem>
      </ul>
      
      {
        props.cover ? 
        <Cover clickCover={props.notCover}>
          <div className="removeBtn" onClick={() => {
            if(props.clickRemoveBtn)
              props.clickRemoveBtn()
          }}>解除关系</div>
        </Cover> :
        ""
      }
    </StyledTaAccount>
  );
}

export default TaAccountUI