import styled from 'styled-components'

const ItemContainer = styled.div`
  display: flex;
  height: .5rem;
  align-items: center;
  border-bottom: 1px solid #fff;
  padding-left: .18rem;
  i img{
    width: .26rem;
    height: .26rem;
    margin-right: 
  }
  input{
    flex: 1;
    padding-left: .15rem;
    border: 0;
    background: none;
    color: #fff;
  }
  input::-webkit-input-placeholder { /* WebKit browsers 适配谷歌 */
      color: rgba(255,255,255,.4);
  }
  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 适配火狐 */
      color: rgba(255,255,255,.4);
  }
  input::-moz-placeholder { /* Mozilla Firefox 19+ 适配火狐 */
      color: rgba(255,255,255,.4);
  }
  input:-ms-input-placeholder { /* Internet Explorer 10+  适配ie*/
      color: rgba(255,255,255,.4);
  }
  .getValidate{
    width: 1rem;
    height: .32rem;
    background: #F2606C;
    color: #fff;
    font-size: .16rem;
    line-height: .32rem;
    text-align: center;
    border-radius: .1rem;
  }


  .phoneIpt{
    flex: 1;
  }

  .am-input-control input{
    font-size: .14rem !important;
    color: #fff !important;
  }
  .am-list-body,.am-list-item{
    background: none !important;
    border: none !important;
  }
  .am-list-body{
    position: static !important;
  }
`

export default ItemContainer
