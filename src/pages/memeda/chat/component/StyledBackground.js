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
            background: #fff;
            color: #000;
            .album {
                font-size: .16rem;
                margin: .15rem;
            }
            .am-image-picker-list {
                padding:0;
            }
        }
`


export {
  BackgroundContainer
}