import styled from 'styled-components'
import border from 'components/styled/border'

const TopContainer = styled.div `
  padding: 0rem .3rem .1rem;
  .bg {
    height: 1.45rem;
    position: relative;
    .top-bg {
      width: 100%;
      height: 100%;
    }
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: .2rem;
      color: #fff;
    }
  }
  .self-rank {
    padding: .1rem 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: #F09199;
      font-size: .15rem;
      padding-right: .25rem;
    }
    img {
      width: .4rem;
      height: .4rem;
      border-radius: 50%;
      margin: 0 .1rem;
    }
    .self-rank-info {
      display: flex;
      align-items: center;
      font-size: .15rem;
    }
  }
`

const Gray = styled.div `
  height: .1rem;
  background-color: #F3F3F3;
`

const RankListContainer = styled.div `
  padding: .1rem .15rem 0;
  >div {
    display: flex;
    align-items: center;
    padding-bottom: .05rem;
    img {
      width: .3rem;
      height: .3rem;
      border-radius: 50%;
      margin-right: .05rem;
    }
    .order {
      width: .25rem;
      height: .25rem;
      border-radius: 50%;
      background-color: #F09199;
      color: #fff;
      font-size: .15rem;
      line-height: .25rem;
      text-align: center;
      margin-right: .15rem;
    }
    .loverCount {
      margin-left: .32rem;
      .count {
        font-size: .1rem;
        color: #444;
        span {
          margin-right: .08rem;
        }
      }
    }
  }
`

const BorderRank = border({
  width: '0 0 1px 0',
  color: '#ddd',
  comp: styled.div ``
})

export {
  TopContainer,
  Gray,
  RankListContainer,
  BorderRank
}