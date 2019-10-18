import styled from 'styled-components'
import border from 'components/styled/border'

const DetermineContainer = styled.div `
        position: absolute;
        top:0.44rem;
        width: 100%;
        height: 100%;
        .determine-container {
            background-color: rgba(112, 112, 112, 0.2);
            width: 100%;
            height: 100%;
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
    DetermineContainer,
    TopBoxContainer,
    LeftBoxContainer
}