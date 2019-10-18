import styled from "styled-components";

const StyledRewards = styled.div `
  width: 100%;
  height: 100%;
  background: #fff;
  ul{
    padding: 0 .15rem;
    li:first-child{
      margin-bottom: .1rem;
    }
    &::after{
      content: "";
      width: 100%;
      height: .1rem;
      background: #f3f3f3;
      position: absolute;
      top: .94rem;
      left: 0;
    }
  }
  .reward{
    position: absolute;
    z-index: 9999;
    width: 2.86rem;
    height: 3.61rem;
    top: 1rem;
    left: .45rem;
    img{
      width: 100%;
      height: 100%;
      border-radius: .05rem;
    }
    div.getHB{
      font-size: .17rem;
      font-weight: 500;
      line-height: .24rem;
      width: 100%;
      color: #fff;
      text-align: center;
      position: absolute;
      top: 1.16rem;
    }
    div.openedHB{
      font-size: .16rem;
      font-weight: 400;
      line-height: .28rem;
      width: 100%;
      color: #fff;
      text-align: center;
      position: absolute;
      top: 1.98rem;
    }
  }
`;

export default StyledRewards