import styled from 'styled-components'
const DynamicPwdContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  .dynamic-form{
    position: absolute;
    top: 47.3%;
    left: 0;
    width: 100%;
    padding: 0 .15rem;
    border: 0 !important;
    li{
      height: .5rem;
      display: flex;
      align-items: center;
      i img{
        margin-left: .1rem;
        width: .26rem;
        height: .26rem;
      }
      input{
        flex: 1;
        background: none;
        border: none;
        font-size: .14rem;
        padding-left: .15rem;
        color: #fff;
      }
    }
    .dynamic-btn{
      margin-top: .36rem;
      border: none;
      color: #fff;
      >div{
        width: 100%;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        font-size: .17rem;
        border-radius: .05rem;
        background: #F2606C;
      }
    }



  }
`
export default DynamicPwdContainer