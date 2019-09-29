import styled from 'styled-components'
import border from 'components/styled/border'

const IndexContainer = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  footer {
    height: 0.49rem;
    width: 100%;
    background-color: #fff;
    display: flex;
    ul {
      flex: 1;
      display: flex;
      li {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          font-size: .09rem;
          line-height: .13rem;
          color: #000;
        }
        span.active {
          color: #E68D95;
        }
        .bar-img1 {
          width: .27rem;
          height: .27rem;
        }
        .bar-img2, .bar-img3, .bar-img4, .bar-img5 {
          width: .19rem;  
          margin-top: .04rem;
          height: .19rem;
          margin-bottom: .06rem;
        }
      }
    }
  }
`

const MainContainer = styled.div `
  flex: 1;
  overflow: auto;
`

const NavContainer = border({
  width: '1px 0 0 0',
  color: '#ddd',
  comp: styled.footer ``
})

export {
  IndexContainer,
  NavContainer,
  MainContainer
}