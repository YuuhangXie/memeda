import styled from "styled-components";

const StyledStore = styled.div `
  height: 100%;
  margin-top: .17rem;
  padding: 0 .15rem;
  >div{
    width: 100%;
    div.item{
      width: 100%;
      height: 1rem;
      margin-bottom: .17rem;
      display: flex;
      &:last-of-type{
        margin: 0;
      }
      img{
        width: 1rem;
        height: 1rem;
        margin-right: .17rem;
      }
      div{
        flex: 1;
        position: relative;
        span.productClass{
          margin-top: .06rem;
          display: inline-block;
          width: .36rem;
          height: .18rem;
          background: #f09199;
          border-radius: .01rem;
          line-height: .18rem;
          text-align: center;
          color: #fff;
          font-size: .11rem;
          font-weight: 100;
          margin-right: .08rem;
        }
        span.productName{
          font-size: .14rem;
          line-height: .2rem;
        }
        span.discountPrice{
          font-size: .12rem;
          line-height: .2rem;
          color: #f09199;
          font-weight: 300;
          position: absolute;
          left: 0;
          bottom: .05rem;
        }
        span.price{
          font-size: .1rem;
          line-height: .15rem;
          color: #000;
          font-weight: 300;
          position: absolute;
          left: .4rem;
          bottom: .08rem;
          text-decoration: line-through;
        }
        span.buy-btn{
          display: inline-block;
          width: 1.17rem;
          height: .32rem;
          line-height: .32rem;
          text-align: center;
          color: #fff;
          font-weight: 300;
          font-size: .1rem;
          border-radius: .16rem;
          background: #f09199;
          position: absolute;
          right: 0;
          bottom: .04rem;
        }
      }
    }
  }
`;

export default StyledStore