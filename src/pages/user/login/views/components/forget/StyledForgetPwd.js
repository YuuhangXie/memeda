import styled from 'styled-components'
const ForgetPwdContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  .forget-form{
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


    
  }
`
export default ForgetPwdContainer