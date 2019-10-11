import React, { Component } from 'react'
import { List, InputItem, Toast } from 'antd-mobile';
import ItemContainer from './StyledLoginItem'
import PhoneIcon from 'images/login/login-icon1.png'

export default class Item extends Component {
  state = {
    hasError: false,
    value: '',
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
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }


  render() {
    return (
      <ItemContainer>
        <i>
          <img src={PhoneIcon} alt="手机号"/>
        </i>
        <div className="phoneIpt">
          <List>
            <InputItem
              type="phone"
              placeholder="输入手机号"
              error={this.state.hasError}
              onErrorClick={this.onErrorClick}
              onChange={this.onChange}
              value={this.state.value}
            ></InputItem>
          </List>
        </div>


          {/* <input type="text" placeholder="输入手机号"/> */}
        <div className="getValidate">获取验证码</div>
      </ItemContainer>
    )
  }
}
