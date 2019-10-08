import styled from 'styled-components'

const CommunityContainer = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    height: .54rem;
    background-color: #F09199;
    font-size: .17rem;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  nav {
    height: .5rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    ul {
      flex: 1;
      display: flex;
      li {
        flex: 1;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        font-size: .15rem;
        color: #000;
        .active {
          position: absolute;
          bottom: .06rem;
          left: 50%;
          transform: translateX(-50%);
          height: .02rem;
          width: .5rem;
          background-color: #F09199;
        }
      }
    }
  }
`

const CommunityContent = styled.div `
  flex: 1;
  background-color: #fff;
  overflow-y: auto;
`



export {
  CommunityContainer,
  CommunityContent
}