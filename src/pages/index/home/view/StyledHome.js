import styled from 'styled-components'

import Homeackground from 'images/home/homeBac.png'

const HomeContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    background: url(${Homeackground});
    background-size: 100%
    .home-tabbar {
        background-color: orange;
        margin-top: 4.42rem
        display: flex;
        justify-content: space-around;
        height:0.84rem;
        width:100%;
        background-color: rgba(255, 255, 255, .6);
        font-size: .12rem;
        color: #000000;
    }
    .icon-box {
        width: 0.47rem;
        height: 0.47rem;
    }
    .home-member {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 100%;
        height: 100%;
    }
    span {
        text-align: center;
    }
    .home-title {
        margin-top: 0.06rem;
        width: 100%;
        display: flex;
        color: #ffffff;
    }
    .avatar {
        width:0.44rem;
        height:0.44rem;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .femaleAva {
        margin-left: 0.15rem;
    }
    .homeDate {
        margin-left: 0.76rem;
        font-size: 0.21rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .maleAva {
        margin-left: 0.78rem;
    }
`

export {
    HomeContainer
}