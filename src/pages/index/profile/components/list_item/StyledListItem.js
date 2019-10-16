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
      font-weight: 400;
      color: #000;
      font-size: .14rem;
      line-height: .2rem;
    }
  }
  .rightPart{
    .more{
      width: .16rem;
      height: .16rem;
      margin-left: .04rem;
    }
    img.head{
      width: .35rem;
      height: .35rem;
      border-radius: 50%;
    }
    span{
      font-weight: 300;
      font-size: .12rem;
      line-height: .17rem;
      color: #000;
    }
    .right-align{
      margin-right: .2rem;
    }
    div{
      width: .5rem;
      height: .15rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        display: inline-block;
        width: .25rem;
        font-weight: 300;
        font-size: .12rem;
        height: .15rem;
        line-height: .13rem;
        color: #000;
        border-style: solid;
        border-color: #b9b9b9;
        &:nth-of-type(1){
          text-align: left;
          padding-left: .1rem;
          border-width: .01rem 0 .01rem .01rem;
          border-radius: .15rem 0 0 .15rem;
        }
        &:nth-of-type(2){
          text-align: right;
          padding-right: .1rem;
          border-width: .01rem .01rem .01rem 0;
          border-radius: 0 .15rem .15rem 0;
        }
        &.active{
          border: 0;
          background: #f09199;
          line-height: .15rem;
        }
      }
    }
    .reward-btn{
      display: inline-block;
      width: .5rem;
      height: .18rem;
      line-height: .18rem;
      text-align: center;
      font-size: .12rem;
      color: #fff;
      font-weight: 300;
      border-radius: .09rem;
      background: #f09199;
    }
    .received{
      background: #f3f3f3;
      color: #c4c3c3;
    }
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