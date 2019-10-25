import styled from "styled-components";

const StyledPrint = styled.div `
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: center;
  div{
    font-size: .16rem;
    font-weight: 400;
    line-height: .23rem;
    text-align: center;
    margin: 0 0 .21rem 0;
  }
  >img{
    &:nth-of-type(1){
      width: 3.45rem;
      height: 2.07rem;
      margin-bottom: .28rem;
    }
    &:nth-of-type(2){
      width: 1.9rem;
      height: .5rem;
    }
  }
`;

export default StyledPrint