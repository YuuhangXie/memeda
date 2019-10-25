import styled from 'styled-components'
import RegisterBackGround from 'images/login/login-bgimg.png'
import border from 'components/styled/border'

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

  .register-form{
    position: absolute;
    top: 47.3%;
    left: 0;
    width: 100%;
    padding: 0 .15rem;
    border: 0 !important;
    li{
      /* border-bottom: 1px solid #fff; */
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
    .login-reg{
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
  RegisterBoxContainer,
  BorderLi,
  BorderDiv
} 