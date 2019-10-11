import styled from 'styled-components'
import border from 'components/styled/border'

const DiaryContainer = styled.div `
        .diary-container {
            display: flex;
            flex-direction: column;
            width: 100%;
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
        }
        .back {
            width: 0.2rem;
            height: 0.2rem;
            margin-left: 0.11rem;
        }
        .title {
            margin-left: 1.34rem;
        }
        img {
            width: 100%;
            height: 100%;
        }
        .addTip {
            width: 0.2rem;
            height: 0.2rem;
            margin-left: 1.22rem;
            position: relative;
        }
        .vertical-box {
            height: 0.2rem;
            border-right: 0.02rem solid #ffffff;
            position: absolute;
            left: 0.1rem;
        }
        .transverse-box {
            width: 0.2rem;
            border-top: 0.02rem solid #ffffff;
            position: absolute;
            top: 0.09rem;
        }
        .diary-body {
            height: 100%;
        }
        .diary-box {
            width: 100%;
            height: 1rem;
            position: relative;
        }
        .avatar {
            width: 0.38rem;
            height: 0.38rem;
            margin-right: 0.13rem;
        }
        .pic-content {
            width: 0.5rem;
            height: 0.5rem;
            position: absolute;
            right: 0.2rem;
            top: 0.2rem;
        }
        .word-content {
            margin: 0.14rem 0 0 0.15rem;
        }
        .user-message {
            display: flex;
            align-items: center;
        }
        .diary-content {
            line-height: 0.21rem;
            margin-top: 0.16rem;
        }
`

const AlbumContainer = border({
    width: '1px 0 0 0',
    color: 'rgba(112, 112, 112, .2)',
    comp: styled.div``
})

export {
    DiaryContainer,
    AlbumContainer
}