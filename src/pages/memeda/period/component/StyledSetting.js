import styled from 'styled-components'

const SettingContainer = styled.div `
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
            }
        }
        .period-body {
            flex:1;
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            .title {
                margin-top: .84rem;
                font-size: .16rem;
                margin-bottom: .11rem;
            }
            .tip {
                font-size: .12rem;
                opacity: .5;
                margin-bottom: .58rem;
            }
            .picker-list {
                width: 100%;
                .am-list-item {
                    height: .56rem;
                    line-height: .56rem;
                }
            }

        }
`

export {
    SettingContainer
}