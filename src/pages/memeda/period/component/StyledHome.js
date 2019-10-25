import styled from 'styled-components'

const HomeContainer = styled.div `
      width: 100%;
      height: 100%;
      .period-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          .header-container {
              display: flex;
              align-items: center;
              line-height: 1;
              width: 100%;
              height: 0.44rem;
              background-color: #F09199;
              color: #ffffff;
              font-size: 0.17rem;
              .back {
                  width: 0.2rem;
                  height: 0.2rem;
                  margin-left: 0.11rem;
                  img {
                      height: 100%;
                      width: 100%;
                  }
              }
              .title {
                  margin-left: 1.32rem;
              }
              .setting {
                  margin-left: 1.13rem;
              }
          }
          .period-body {
              flex:1;
              display: flex;
              flex-direction: column;
              align-items: center;
              .avatar {
                  img {
                      width: 2.61rem;
                      height: 2.49rem;
                  }
              }
              .welcome {
                  font-size: .15rem;
                  color: #F09199;
              }
              .tip {
                  font-size: .15rem;
                  color: #000000;
                  margin-top: .24rem;
              }
              button {
                  margin-top: .24rem;
                  width: 3rem;
                  height: .35rem;
                  color: #fff;
                  text-align:center;
                  line-height: .35rem;
                  font-size: .16rem;
                  background: #F09199;
                  border: none;
                  border-radius: .05rem;
              }
          }
      }
`

export {
  HomeContainer
}