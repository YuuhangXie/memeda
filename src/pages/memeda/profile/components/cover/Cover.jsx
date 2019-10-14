import React from "react";

import StyledCover from "./StyledCover";

export default (props) => {
  return (
    <StyledCover
      onClick={() => {
        if(props.clickCover)
          props.clickCover()
      }}
    >
      {props.children}
    </StyledCover>
  );
}