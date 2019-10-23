import styled from "styled-components";

const StyledMarriage = styled.div `
  width: 100%;
  height: 100%;
  background: #fff;
  .content{
    width: 100%;
    height: 100%;
    padding: .2rem .15rem 0;
    img{
      width: 100%;
      height: 1rem;
      border-radius: .05rem;
    }
    div{
      width: 100%;
      margin: .1rem 0 .2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        font-weight: 300;
        &:first-child{
          color: #707070;
          font-size: .12rem;
          line-height: .17rem;
        }
        &:last-child{
          color: #000;
          font-size: .14rem;
          line-height: .2rem;
        }
      }
    }
  }
`;

export default StyledMarriage