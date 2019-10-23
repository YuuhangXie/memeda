import styled from 'styled-components'
import border from 'components/styled/border'

const AddContainer = styled.div `
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    img {
        width: 100%;
        height: 100%;
    }
    textarea {
        border: none;
        text-indent: 0.2rem;
    }
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
            margin-left: 0.105rem;
        }
        span:first-of-type {
            margin-left: 1.205rem;
        }
        span:last-child {
            margin-left: 1.005rem;
        }
    }
    .img-box {
        margin: 0.075rem 0 0 0.155rem;
        display: flex;
        .add-img-container {
            overflow: hidden;
            float: left;
            width: 0.75rem;
            height: 0.975rem;
            margin: 0 0.12rem 0.1rem 0;
        }
        .add-img-container:nth-child(4(n+1)) {
            margin-right: 0;
        }
    }
    .determine-container {
        position: absolute;
        top:0.44rem;
        background-color: rgba(112, 112, 112, 0.2);
        width: 100%;
        height: calc(100% - 0.44rem);
        display: flex;
        justify-content: center;
        .box {
            width: 2.6rem;
            height: 1.04rem;
            background-color: #ffffff;
            border-radius: 0.2rem;
            margin-top: 2.18rem;
            .top-box {
                font-size: 0.15rem;
                line-height: 0.21rem;
                text-align: center;
                height:0.52rem;
                width: 100%;
                padding-top: 0.13rem;
            }
            .bottom-box {
                text-align: center;
                color: #F09199;
                display: flex;
                .cancle {
                    padding-top: 0.13rem;
                    height: 0.52rem;
                    width: 1.29rem;
                }
                .determine {
                    padding-top: 0.13rem;
                    height: 0.52rem;
                    width: 1.3rem;
                }
            }
        }    
    }
    .hide-box {
        display: none;
    }
`

const AddLineContainer = border({
    width: '1px',
    color: '#DDDDDD',
    comp: styled.div`
        width: 3.45rem;
        height: 1.685rem;
        margin: 0.11rem 0 0 0.15rem;
    `
})

const TopBoxContainer = border({
    width: '0 0 1px 0',
    color: 'rgba(112, 112, 112, .2)',
    comp: styled.div``
})

const LeftBoxContainer = border({
    width: '0 1px 0 0',
    color: 'rgba(112, 112, 112, .2)',
    comp: styled.div``
})

export {
    AddContainer,
    AddLineContainer,
    TopBoxContainer,
    LeftBoxContainer
}