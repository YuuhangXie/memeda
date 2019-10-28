import styled from "styled-components";

const StyledProfile = styled.div `
  height: 100%;
  background: #F3F3F3;
  .users{
    width: 100%;
    height: .92rem;
    background: #fff;
    position: relative;
    padding: .2rem .15rem;
    display: flex;
    justify-content: space-between;
    img.link{
      width: .49rem;
      height: .49rem;
      position: absolute;
      left: 1.63rem;
      top: .21rem;
    }
    .userInfo{
      width: 1.05rem;
      height: 100%;
      display: flex;
      img.head{
        width: .52rem;
        height: .52rem;
        margin-right: .1rem;
        border-radius: 50%;
      }
      .infoText{
        width: .43rem;
        height: .52rem;
        padding: .04rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        span.username{
          font-weight: 600;
          color: #000;
          font-size: .14rem;
          line-height: .2rem;
        }
        span.usercode{
          font-weight: 300;
          color: #000;
          font-size: .12rem;
          line-height: .17rem;
        }
      }
      &:nth-of-type(2){
        img.head{
          margin: 0 0 0 .1rem;
        }
        .username{
          text-align: right;
        }
        .usercode{
          text-align: right;
        }
      }
    }
  }
  ul{
    margin-top: .1rem;
    padding: 0 .15rem;
    background: #fff;
  }
  .removeBtn{
    width: 3rem;
    height: .4rem;
    margin: 0.1rem auto 0;
    line-height: .4rem;
    background: #f09199;
    border-radius: .05rem;
    font-size: .16rem;
    font-weight: 300;
    color: #fff;
    text-align: center;
  }
`;

export default StyledProfile;