import styled from "styled-components";

const StyledUpload = styled.div `
  width: 100%;
  height: 100%;
  .swiper-container{
    width: 100%;
    height: 3.48rem;
    margin-top: .21rem;
    .swiper-slide{
      margin-right: -1rem !important;
      z-index: 1;
      width: 2rem !important;
      transform: scale(.875) !important;
      height: 3rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .swiper-slide-next{
      z-index: 2;
    }
    .swiper-slide-active{
      transform: scale(1) !important;
      z-index: 3;
    }
    .swiper-pagination-bullet{
      width: .06rem;
      height: .06rem;
      background: #f09199;
      opacity: 1;
      bottom: .15rem;
    }
    .swiper-pagination-bullet-active{
      background: #f8d2D5
      opacity: 1;
    }
  }
  .notify{
    margin-top: .1rem;
    font-size: .14rem;
    color: #000;
    line-height: .2rem;
    text-align: center;
  }
  .btns{
    margin-top: .3rem;
    padding: 0 1.2rem;
    display: flex;
    justify-content: space-between;
    >img{
      width: .32rem;
      height: .32rem;
    }
  }
`;

export default StyledUpload