import styled from 'styled-components'

const DiaryDetailContainer = styled.div `
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        img {
            display: block;
            width: 100%;
            height: 100%;

        }
        textarea {
            border: none;
            width: 100%;
            margin-top: 0.19rem;
            margin-left: 0.15rem;
            font-size: 0.15rem;
            line-height: 0.21rem;
        }
        .header-container {
            width: 100%;
            height: 0.44rem;
            background-color: #F09199;
            display: flex;
            align-items: center;
            color: #ffffff;
            line-height: 0.24rem;
            font-size: 0.17rem;
            .back {
                width: 0.2rem;
                height: 0.2rem;
                margin-left: 0.1rem;
            }
            .diary-icon-box {
                margin-left: 3rem;
            }
        }
`

export {
    DiaryDetailContainer
}