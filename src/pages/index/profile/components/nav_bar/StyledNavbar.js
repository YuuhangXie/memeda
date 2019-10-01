import styled from "styled-components";

const StyledNavbar = styled.div `
  height: .44rem;
  width: 100%;
  background: #F09199;
  position: relative;
  .goback{
    width: .2rem;
    height: .2rem;
    position: absolute;
    top: .12rem;
    left: .15rem;
  }
  .navTitle{
    color: #fff;
    font-size: .17rem;
    font-weight: bold;
    width: 100%;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
  }
  .rightBtn{
    position: absolute;
    right: .15rem;
    top: .12rem;
  }
`;

export default StyledNavbar;