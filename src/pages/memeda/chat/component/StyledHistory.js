import styled from 'styled-components'

const HistoryContainer = styled.div`
      width: 100%;
      height: 100%;
      .history-container {
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
            .history-body {
              display: flex;
              justify-content: center;
              .date-container {
                width: 60%;
                height: 80%;
                margin-top: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                font-size: 16px;
              }
              img {
                width: 100%;
                height: 100%;
              }
              span {
                text-align: center;
              }
            }
      }
      

`


export {
  HistoryContainer
}