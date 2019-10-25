import styled from 'styled-components'
import border from 'components/styled/border'

const PhotoContainer = styled.div `
    background-color: #ffffff;
    .photo-container {
        img {
            width: 100%;
            height: 100%;
        }
        .album-box {
            width: 100%;
            display: flex;
            .time-box {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                span {
                    dispaly: block;
                }
                .month {
                    margin-top: 0.265rem;
                    font-size: 20px;
                    line-height: 0.28rem;
                }
                .date {
                    font-size: 14px;
                    line-height: 0.2rem;
                }
            }
            .content-box {
                height: 100%;
                flex: 280;
                .photo-content {
                    display: block;
                    margin: 0.265rem 0 0 0.185rem;
                    font-size: 14px;
                    line-height: 0.2rem;
                }
                .photo-container {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    margin-left: 0.09rem;
                    margin-top: 0.11rem;
                    .little-photo-box {
                        width: 0.75rem;
                        height: 0.975rem;
                        margin: 0 0 0.07rem 0.095rem ;
                    }
                }
                .photo-moment {
                    display: block;
                    margin: 0.11rem 0 0 0.185rem;
                    font-size: 13px;
                    line-height: 0.185rem;
                }
            }
        }
    }
`

const DateLineContainer = border({
    width: '0 1px 0 0',
    color: '#DDDDDD',
    comp: styled.div`
        height: 100%;
        flex: 95;
    `
})

export {
    PhotoContainer,
    DateLineContainer
}