import styled from 'styled-components'

const TreeContainer = styled.div `
  height: 100%;
  position: relative;
  .water {
    width: .62rem;
    height: .42rem;
    position: absolute;
    top: 60%;
    left: 60%;
  }
  .sun {
    width: .5rem;
    height: .5rem;
    position: absolute;
    top: 60%;
    left: 20%;
  }
  .pao {
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 55%;
    left: 55%;
  }
`

export {
  TreeContainer
}