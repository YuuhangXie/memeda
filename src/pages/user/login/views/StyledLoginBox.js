import styled from 'styled-components'
import LoginBackGround from 'images/login/login-bgimg.png'
import border from 'components/styled/border'

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

const BorderLi = border({
  width: '0 0 1px 0',
  color: '#fff',
  comp: styled.li``
})

const BorderDiv = border({
  width: '1px',
  color: '#fff',
  radius: 5,
  comp: styled.div``
})

export {
  LoginBoxContainer,
  BorderLi,
  BorderDiv,
} 