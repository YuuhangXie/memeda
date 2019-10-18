import styled from 'styled-components'

const HomeContainer = styled.div `
        height: 100%;
        background-color: #ffffff;
        .home-container {
            display: flex;
            justify-content: center;
        }
        .img-box {
            width: 80%;
            margin-top: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        img {
            width: 100%;
            height: 100%;
        }
        span {
            display: block;
            margin-top: 0.1rem;
            font-size: 0.17rem;
            text-align: center;
        }
`

export {
    HomeContainer
}