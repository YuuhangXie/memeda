import styled from "styled-components";

const StyledRewards = styled.div `
  width: 100%;
  height: 100%;
  background: #fff;
  ul{
    padding: 0 .15rem;
    li:first-child{
      margin-bottom: .1rem;
    }
    &::after{
      content: "";
      width: 100%;
      height: .1rem;
      background: #f3f3f3;
      position: absolute;
      top: .94rem;
      left: 0;
    }
  }
`;

export default StyledRewards