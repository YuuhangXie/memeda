import styled from 'styled-components'
import LoginBackGround from 'images/login/login-bgimg.png'

const LoginBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: url(${LoginBackGround}) no-repeat center center;
  background-size: cover;
  >div{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
  }
`

export default LoginBoxContainer