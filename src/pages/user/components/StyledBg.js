import styled from 'styled-components'
import LoginBackGround from 'images/login/login-bgimg.png'

const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: url(${LoginBackGround}) no-repeat center center;
  background-size: cover;
`

export default BgContainer