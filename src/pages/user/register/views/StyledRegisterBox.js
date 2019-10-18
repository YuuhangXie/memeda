import styled from 'styled-components'
import RegisterBackGround from 'images/login/login-bgimg.png'

const RegisterBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: url(${RegisterBackGround}) no-repeat center center;
  background-size: cover;
  >div{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
  }
`

export default RegisterBoxContainer