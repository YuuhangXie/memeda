import styled from 'styled-components'

import Homeackground from 'images/home/homeBac.png'

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    background: url(${Homeackground});
    background-size: 100%
    .home-tabbar {
        background-color: orange;
        margin-top: 5.12rem
    }
`

export {
    HomeContainer
}