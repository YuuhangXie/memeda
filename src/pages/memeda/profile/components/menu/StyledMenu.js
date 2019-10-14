import styled from "styled-components";

import border from "components/styled/border";

const StyledMenu = styled.div `
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: #e8e6e7;
  span{
    background: #fff;
    height: .56rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .16rem;
    line-height: .23rem;
    color: #000;
    font-weight: 400;
    position: relative;
    input{
      position: absolute;
      z-index: 10;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  span.cancel{
    margin-top: .1rem;
  }
`;

const BorderedMenuItem = border({
  width: "0 0 1px 0",
  color: "#ddd",
  comp: styled.span ``
});

export {
  StyledMenu,
  BorderedMenuItem
}