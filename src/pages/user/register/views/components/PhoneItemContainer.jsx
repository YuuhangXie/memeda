import React, { Component } from 'react'
import { InputItem, Toast } from 'antd-mobile';
// import PhoneItemContainer from './StyledPhoneItem'
import PhoneIcon from 'images/login/login-icon1.png'

import styled from 'styled-components'

const PhoneItemContainer = styled.div`
  display: flex;
  flex: 1;
  height: .5rem;
  align-items: center;
  /* input{
    flex: 1;
    padding-left: .15rem;
    border: 0;
    background: none;
    color: #fff;
  } */
  /*input::-webkit-input-placeholder {  WebKit browsers 适配谷歌 
      color: rgba(255,255,255,.4);
  }*/
  /*input:-moz-placeholder {  Mozilla Firefox 4 to 18 适配火狐 
      color: rgba(255,255,255,.4);
  }*/
  /*input::-moz-placeholder {  Mozilla Firefox 19+ 适配火狐 
      color: rgba(255,255,255,.4);
  }*/
  /*input:-ms-input-placeholder {  Internet Explorer 10+  适配ie
      color: rgba(255,255,255,.4);
  }*/
  .getValidate{
    width: 1rem;
    height: .32rem;
    background: #F2606C;
    color: ${props => props.btcolor};
    font-size: .16rem;
    line-height: .32rem;
    text-align: center;
    border-radius: .1rem;
    border: none;
  }
  .phoneIpt{
    flex: 1;
  }

  .am-list-item{
    background: none !important;
  }
  .am-input-control input{
    font-size: .14rem !important;
    color: #fff !important;
  }
  .am-list-item.am-input-item {
    padding-left: 0;
  }
  /* .am-list-body,.am-list-item{
    background: none !important;
    border: none !important;
  }
  .am-list-body{
    position: static !important;
  } */
`




class PhoneItem extends Component {
  state = {
    hasError: false,
    value: '',
    getVali: false,
    getValiNum: 60,
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      // 传输手机号
      this.props.getPhone(value.replace(/\s*/g,""))
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }



  getValiClick = ()=> {
    if(!this.state.getVali){
      // 点击获取验证码
      this.props.getValidate('123456')
      this.se = setInterval(()=>{
        if(this.state.getValiNum > 0){
          this.setState({
            getValiNum: this.state.getValiNum - 1
          })
        }
      },1000)
      this.setState({
        getVali: true
      })
      this.st = setTimeout(() => {
        clearInterval(this.se)
        this.setState({
          getVali: false,
          getValiNum: 60
        })
        console.log('又可以发送短信啦')
      }, 60000)
    }
  }
  


  componentWillUnmount(){
    clearInterval(this.se)
    clearTimeout(this.st)
    this.setState({
      getVali: false,
      getValiNum: 60
    })
  }


  render() {
    return (
      <PhoneItemContainer btcolor={this.state.getVali ? "#ccc" : "#fff"}>
        <i>
          <img src={PhoneIcon} alt="手机号"/>
        </i>
        <div className="phoneIpt">
          <InputItem
            type="phone"
            placeholder="输入手机号"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
          ></InputItem>
        </div>
        <button
          className="getValidate"
          onClick={this.getValiClick.bind(this) }
          disabled={this.state.getVali}
          >{this.state.getVali ? this.state.getValiNum + 's后重试' : '获取验证码'}</button>
      </PhoneItemContainer>
    )
  }
}

export default PhoneItem
