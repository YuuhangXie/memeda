import styled from 'styled-components'
import LoginMemeda from 'images/login/login-memeda.png'

const TrueLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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




`

export default TrueLoginContainer