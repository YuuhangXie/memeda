import styled from "styled-components";

import border from "components/styled/border";

const StyledModal = styled.div `
  position: absolute;
  top: 2.64rem;
  left: .15rem;
  width: 3.45rem;
  height: 1.68rem;
  background: #f09199;
  border-radius: .05rem;
  display: flex;
  flex-direction: column;
  >span{
    font-size: .16rem;
    color: #fff;
    font-weight: 300;
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
      position: absolute;
      z-index: 10;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  h5.title{
    color: #fff;
    font-size: .16rem;
    line-height: .23rem;
    font-weight: 300;
    text-align: center;
    padding-top: .17rem;
    padding-bottom: .22rem;
  }
  input{
    flex: 1;
    margin: 0 .35rem .05rem;
    padding-left: .21rem;
    border: 0;
    border-radius: .23rem;
    background: #faeaeb;
  }
  .btns{
    height: .57rem;
    display: flex;
  }
`;

const BorderedSpan = border({
  width: "1px 0 1px 0",
  color: "#fff",
  comp: styled.span ``
});

const BorderedBtnBox = border({
  width: "1px 0 0 0",
  color: "#fff",
  comp: styled.div `
    height: .57rem;
    display: flex;
    span{
      flex: 1;
      font-size: .16rem;
      color: #fff;
      font-weight: 300;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
});

const BorderBtn = border({
  width: "0 1px 0 0",
  color: "#fff",
  comp: styled.span ``
});

export {
  StyledModal,
  BorderedSpan,
  BorderedBtnBox,
  BorderBtn
}