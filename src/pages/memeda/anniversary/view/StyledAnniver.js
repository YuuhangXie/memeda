import styled from 'styled-components'

const AnniverContainer = styled.div`
    background-color: #ffffff;
    height: 100%;
    width: 100%;
    .header-container {
        width: 100%;
        height: 0.44rem;
        background-color: #F09199;
        color: #ffffff;
        line-height: 0.24rem;
        font-size: 0.17rem;
        display: flex;
        align-items: center;
    }
    .back {
        width: 0.2rem;
        height: 0.2rem;
        margin-left: 0.11rem;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    .add {
        width: 0.2rem;
        height: 0.2rem;
        margin-left: 1.27rem;
    }
    .title {
        margin-left: 1.31rem;
    }
    .date-box {
        display: flex;
        justify-content: center;
    }
    .date-container {
        width: 60%;
        height: 80%;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 16px;
    }
    span {
        text-align: center;
    }
`

export {
    AnniverContainer
}