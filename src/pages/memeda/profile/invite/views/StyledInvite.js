import styled from "styled-components";

const StyledInvite = styled.div `
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: center;
  >img{
    width: 2rem;
    height: 3rem;
    margin: .21rem 0 0;
  }
  >span{
    display: inline-block;
    font-size: .14rem;
    line-height: .2rem;
    color: #000;
    font-weight: 400;
    margin-top: .46rem;
  }
  div.invite-code{
    display: flex;
    line-height: .27rem;
    font-size: .19rem;
    color: #000;
    font-weight: 400;
    align-items: center;
    margin: .05rem 0 0 .82rem;
    span{
      display: inline-block;
      width: .45rem;
      height: .17rem;
      background: #f09199;
      border-radius: .04rem;
      font-size: .12rem;
      font-weight: 100;
      color: #fff;
      line-height: .17rem;
      text-align: center;
      margin-left: .11rem;
    }
  }
  .btns{
    margin-top: .25rem;
    img{
      width: .32rem;
      height: .32rem;
      &:first-child{
        margin-right: .73rem;
      }
    }
    span{
      font-size: .12rem;
      font-weight: 100;
      color: #000;
      line-height: .17rem;
      &:first-of-type{
        margin-right: .57rem;
      }
    }
  }
`;

export default StyledInvite