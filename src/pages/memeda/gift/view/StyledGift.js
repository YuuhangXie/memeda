import styled from 'styled-components'
import border from 'components/styled/border'

const GiftContainer = styled.div `
        display: flex;
        height: 100%;
        background-color: #ffffff;
        .gift-container {
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
            margin-left: 1.23rem;
        }
        img {
            width: 100%;
            height: 100%;
        }
        .gift-body {
            flex: 1;
        }
        .wish-box{
            display: flex;
            align-items: center;
            line-height: 0.24rem;
            font-size: 0.17rem;
        }
        .ava-container {
            width: 0.75rem;
            height: 0.75rem;
            margin-right: 0.13rem;
        }
        .body-container {
            margin-left: 0.15rem;
            margin-top: 0.25rem;
            height: 3.05rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .updateAva {
            position: absolute;
            margin-top: 0.44rem;
            background-color: rgba(112, 112, 112, .2);
            width: 100%;
            height: calc(100% - 0.44rem);
        }
        .hideAva {
            display: none;
        }
        .picture-container {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 1.78rem;
        }
        .update-box {
            width: 100%;
            height: 0.56rem;
            text-align: center;
            line-height: 0.56rem;
            font-size: 16px;
            background-color: #ffffff;
        }
        .delete {
            position: absolute;
            bottom: 0;
        }
        ul {
            margin: 0.48rem 0 0 0.48rem;
            font-size: 16px;
        }
        li {
            margin-top: 0.16rem;
        }
        li:first-child {
            margin-top: 0;
        }
`

const AlbumContainer = border({
    width: '1px 0 0 0',
    color: 'rgba(112, 112, 112, .2)',
    comp: styled.div``
})

export {
    GiftContainer,
    AlbumContainer
}