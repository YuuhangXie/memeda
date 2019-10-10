import styled from 'styled-components'

const BackgroundContainer = styled.div`
      width: 100%;
      height: 100%;

      .background-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
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
                    margin-left: 1.11rem;
                }

            }
      }
      .background-body {
          flex: 1;
          padding:.2rem .15rem 0;
          background: #fff;
          .album-box {
            width: 100%;
            height: .52rem;
            line-height: .52rem;
            font-size: .16rem;
            border: 1px #ddd solid;
            position: relative;

            input {
                opacity: 0;
            }
            .photo-name {
                padding-left: .18rem;
                position: absolute;
                top: 0;
                left: 0;
            }
          }
      }
`


export {
  BackgroundContainer
}