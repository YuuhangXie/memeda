import styled from 'styled-components'
import border from 'components/styled/border'

const PublishContainer = styled.div `
  height: .5rem;
  padding: .05rem .15rem .05rem .15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
  }
  p {
    margin-left: -0.6rem;
    font-size: .15rem;
    color: #000;
    font-weight: 600;
    margin-top: .05rem;
  }
  em {
    width: .26rem;
    height: .26rem;
    border-radius: 50%;
    background-color: #F09199;
    font-size: .25rem;
    line-height: .2rem;
    color: #fff;
    font-weight: border;
    text-align: center;
  }
` 

const ViewsContainer = styled.div `
  .info {
    height: .3rem;
    display: flex;
    img {
      width: .3rem;
      height: .3rem;
      border-radius: 50%;
      margin-top: .03rem;
    }
    .name {
      margin-left: .1rem;
      font-size: .14rem;
      line-height: .19rem;
      color: #000;
      font-weight: 500;
      margin-top: .05rem;
    }
    .gender {
      width: .4rem;
      height: .15rem;
      border-radius: .15rem;
      line-height: 1em;
      margin-left: .11rem;
      margin-top: .06rem;
      img {
        width: .14rem;
        height: .14rem;
        margin-top: -.01rem;
        margin-left: .05rem;
      }
      span {
        font-size: .11rem;
        margin-left: .02rem;
        color: #fff;
      }
    }
    .female {
      background-color: #F09199;
    }
    .male {
      background-color: #64B6FE;
    }
  }
  .content {
    margin-left: .4rem;
    font-size: .14rem;
    line-height: .2rem;
    span {
      color: #41A6FD;
      margin-right: .05rem;
    }
  }
  .images {
    display: flex;
    flex-wrap: wrap;
    margin-left: .4rem;
    padding-bottom: .13rem;
    img {
      width: .68rem;
      height: auto;
      margin-right: .3rem;
      margin-top: .1rem
    }
  }
  .func {
    padding-bottom: .06rem;
    display: flex;
    padding-top: .14rem;
    margin-left: .4rem;
    justify-content: space-between;
    line-height: 1em;
    .time {
      font-size: .12rem;
      color: #707070;
      line-height: .15rem;
    }
    .comment {
      display: flex;
      width: .9rem;
      font-size: .12rem;
      color: #707070;
      line-height: 1em;
      justify-content: space-between;
      img {
        width: .15rem;
        height: .15rem;
        margin-right: .08rem;
        vertical-align: middle;
      }
      .zan {
        margin-right: .2rem;
        display: flex;
        align-items: center;
      }
      .pl {
        display: flex;
        align-items: center;
      }
    }
  }
`

const BorderPublish = border({
  width: '0 0 1px 0',
  color: '#ddd',
  comp: styled.div ``
})

const BorderViews = border({
  width: '0 0 1px 0',
  color: '#ddd',
  comp: styled.div `
    padding: .15rem .15rem 0 .15rem;
  `
})

export {
  PublishContainer,
  BorderPublish,
  BorderViews,
  ViewsContainer
}