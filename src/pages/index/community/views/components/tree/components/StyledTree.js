import styled from 'styled-components'

const TreeContainer = styled.div `
  height: 100%;
  position: relative;
  .watering {
    .water {
      width: .62rem;
      height: .42rem;
      position: absolute;
      top: 60%;
      left: 60%;
    }
    .pao {
      width: 1rem;
      height: 1rem;
      position: absolute;
      top: 55%;
      left: 55%; 
    }
  }
  .water-tip {
    position: absolute;
    top: 63%;
    left: 59%;
    font-size: .17rem;
    color: #fff;
    font-weight: bold;
  }
  .sun-tip {
    position: absolute;
    top: 63%;
    left: 18%;
    font-size: .17rem;
    color: #fff;
    font-weight: bold;
  }
  .sunning {
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
      left: 14%;
    }
  }
  .level {
    position: absolute;
    top: 4.5%;
    left: 17%;
    color: #FEB8BD;
  }
`

export {
  TreeContainer
}