import styled from 'styled-components'
import LoginBackGround from 'images/login/login-bgimg.png'
import LoginMemeda from 'images/login/login-memeda.png'

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: url(${LoginBackGround}) no-repeat center center;
  background-size: cover;
  .login-wrap{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
    .login-title{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-top: 1.4rem;
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



  }
`

export default LoginContainer