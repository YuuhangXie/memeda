import styled from 'styled-components'
import LoginMemeda from 'images/login/login-memeda.png'

const TrueLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  .login-title{
    position: absolute;
    top: 21%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1{
      font-size: 0;
      width: 1.16rem;
      height: .4rem;
      background: url(${LoginMemeda}) no-repeat center center;
      background-size: 100%;
      margin-bottom: .24rem;
    }
    p{
      height: .2rem;
      line-height: .2rem;
      font-size: .15rem;
      color: #fff;
      opacity: .8;
    }
    .login-love{
      margin-bottom: .1rem;
    }
    .login-text{
      font-size: .14rem;
    }

  }

  .login-form{
    position: absolute;
    top: 47.3%;
    left: 0;
    width: 100%;
    padding: 0 .15rem;
    border: 0 !important;
    li{
      border-bottom: 1px solid #fff;
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
    li.login-else{
      height: .64rem;
      padding-top: .1rem;
      justify-content: space-between;
      align-items: flex-start;
      span{
        font-size: .14rem;
        color: #fff;
      }
    }
    .login-log,.login-else,.login-reg{
      border: none;
      color: #fff;
    }
    .login-log,.login-reg {
      >div{
        width: 100%;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        font-size: .17rem;
        border-radius: .05rem;
      }
    }
    .login-log {
      margin-bottom: .25rem;
      >div{
        background: #F2606C;
      }
    }
    .login-reg{
      >div{
        border: 1px solid #fff;
      }
    }





  }
`

export default TrueLoginContainer