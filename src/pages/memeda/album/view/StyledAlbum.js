import styled from 'styled-components'

const AlbumContainer = styled.div `
    height: 100%;
    background-color: #ffffff;
    img {
        width: 100%;
        height: 100%;
    }
    input {
        opacity: 0;
    }
    .album-container {
        height: 100%;
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
                margin-left: 0.105rem;
            }
            span:first-of-type {
                margin-left: 0.025rem;
            }
            span:last-child {
                margin-left: 2.25rem;
            }
        }
        .hidePage {
            display: none;
        }
        .coverPage {
            background-color: rgba(112, 112, 112, 0.2);
            width: 100%;
            height: calc(100% - 0.44rem);
            position: absolute;
            top: 0.44rem;
            .picture-container {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 1.78rem;
                .update-box {
                    position: relative;
                    width: 100%;
                    height: 0.56rem;
                    text-align: center;
                    line-height: 0.56rem;
                    font-size: 16px;
                    background-color: #ffffff;
                    .photo-name {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        margin: auto;
                    }
                }
                .delete {
                    position: absolute;
                    bottom: 0;
                }
            }
        }
    }
`

export {
    AlbumContainer
}