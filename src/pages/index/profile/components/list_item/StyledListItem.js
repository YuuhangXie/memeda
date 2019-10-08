import styled from "styled-components";

import border from "components/styled/border";

const ListItem = styled.li `
  width: 100%;
  height: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .leftPart{
    display: flex;
    align-items: center;
    .settings{
      width: .35rem;
      height: .31rem;
      margin-left: -.08rem;
      margin-right: .03rem;
    }
    .upload{
      width: .23rem;
      height: .23rem;
      margin-left: -.01rem;
      margin-right: .09rem;
    }
    .rewards{
      width: .32rem;
      height: .32rem;
      margin-left: -.06rem;
      margin-right: .05rem;
    }
    .rings{
      width: .25rem;
      height: .25rem;
      margin-left: -.02rem;
      margin-right: .08rem;
    }
    .marriage{
      width: .25rem;
      height: .25rem;
      margin-left: -.02rem;
      margin-right: .08rem;
    }
    .print{
      width: .17rem;
      height: .17rem;
      margin-left: .01rem;
      margin-right: .13rem;
    }
    .orders{
      width: .51rem;
      height: .47rem;
      margin-left: -.15rem;
      margin-right: -.06rem;
    }
    .title{
      font-weight: Regular;
      color: #000;
      font-size: .14rem;
      line-height: .2rem;
    }
  }
  .more{
    width: .16rem;
    height: .16rem;
  }
  .cover{
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const StyledListItem = border({
  width: "0 0 1px 0",
  color: "#ddd",
  comp: ListItem
});

export default StyledListItem;