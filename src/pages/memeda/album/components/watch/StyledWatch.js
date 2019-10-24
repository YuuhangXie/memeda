import styled from 'styled-components'

const WatchContainer = styled.div `
    width: 100%;
    height: 100%;
    background-color: #DDDDDD;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    .target-img-container {
        max-width: 100%;
        max-height: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }
`

export { WatchContainer }