import styled from 'styled-components'
import border from 'components/styled/border'

const IndexContainer = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  footer {
    height: 0.49rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #fff;
  }

`

const NavContainer = border({
  width: '1px 0 0 0',
  color: '#ddd',
  comp: styled.footer ``
})

export {
  IndexContainer,
  NavContainer
}