import styled from 'styled-components'
import border from 'components/styled/border'

const SetnickContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  .setWrap{
    flex: 1;
    position: relative;
    .headImgWrap{
      /* position: absolute;
      top: 7.63%; */
      margin-top: .46rem;

      height: 1.18rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .headImg{
        width: .78rem;
        height: .78rem;
        /* border-radius: 50%; */
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        .img-ipt{
          width: .78rem;
        }
        img{
        width: .78rem;
        height: .78rem;
        border-radius: 50%;
        }
      }
      .am-image-picker, .am-image-picker-list, .am-flexbox-align-center, .am-flexbox-item{
        width: .76rem !important;
        height: .76rem !important;
      }
      .am-image-picker-list, .am-flexbox-item{
        margin: 0 !important;
        padding: 0 !important;
      }
      p{
        font-size: .17rem;
        height: .24rem;
        line-height: .24rem;
        color: #191717;
      }
    }

    .setNickWrap{
      /* position: absolute;
      top: 32.8%; */
      margin-top: .35rem;

      height: .6rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 0 .15rem;
      P{
        height: .2rem;
        font-size: .14rem;
        color: #191717;
        line-height: .2rem;
      }
      input{
        width : 100%;
        border: none;
        text-align: center;
        margin-bottom: .08rem;
      }
    }

    .setSexWrap{
      /* position: absolute;
      top: 50%; */
      margin: .51rem 0 .72rem 0;

      width: 100%;
      height: .16rem;
      display: flex;
      justify-content: center;
      ul{
        width: .5rem;
        height: .16rem;
        display: flex;
        position: relative;
        li{
          width: .25rem;
          height: .16rem;
          font-size: .12rem;
          color: #000;
          text-align: center;
          line-height: .15rem;
          z-index: 1;
        }
        li:nth-child(1){
          border-radius: 50% 0 0 50%;
        }
        li:nth-child(2){
          border-radius: 0 50% 50% 0;
        }
        .active{
          background: #F09199;
          color: #fff;
        }
      }
    }

    .setSubmit{
      /* position: absolute;
      top: 65%;
      left: 50%;
      transform: translateX(-50%); */
      /* margin: 0 auto; 浏览器端专用 */
      width: 3rem;
      height: .56rem;
      background: #F09199;
      border-radius: .05rem;
      font-size: .17rem;
      line-height: .56rem;
      text-align: center;
      color: #fff;
    }



  }
`

const BorderDiv = border({
  width: '0 0 1px 0',
  color: '#ddd',
  comp: styled.div`
  width: 100%;
  `
})


const BorderUl = border({
  width: '1px',
  color: '#b9b9b9',
  radius: 8,
  comp: styled.ul``
})


export {
  SetnickContainer,
  BorderDiv,
  BorderUl
}