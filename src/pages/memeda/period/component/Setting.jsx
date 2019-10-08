import React, { Component } from 'react'


import axios from 'utils/api.service.js'

import Back from 'images/gift/back.png'

import { SettingContainer } from './StyledSetting'

import {  DatePicker, Picker, List, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

class Test extends Component {
  state = {
    dpValue: now,
    distance : []
  }

  clickHandler() {
    this.props.history.goBack()
  }

  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        console.log(error);
        alert('验证失败');
      }
    });
  }

  async componentDidMount(){
    let result = await axios.get('/api/period')
    this.setState({
      distance: result.data.distance
    })
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <SettingContainer>
        <div className="period-container">
          <div className="header-container">
            <div className="back" onClick={() => this.clickHandler()}>
              <img src={Back} alt="返回" />
            </div>
            <span className="title">小姨妈</span>
          </div>
        </div>
          
        <div className="period-body">
          <div className="title">完善以下信息</div>
          <div className="tip">当姨妈来临时，会第一时间通知你呦！</div>

          <List style={{ backgroundColor: 'white' }} className="picker-list">
            <DatePicker
              mode="date"
              {...getFieldProps('lasttime', {
                initialValue: this.state.dpValue,
                rules: [
                  { required: true, message: '必须要选择一个日期' },
                ],
              })}
            >
              <List.Item>最近一次来姨妈</List.Item>
            </DatePicker>

            <Picker data={this.state.distance} cols={1} {...getFieldProps('distance')} className="forss">
              <List.Item>间隔</List.Item>
            </Picker>

            <Button type="primary" size="small" inline onClick={this.onSubmit}
              style={{"width":"100%", "background": "#F09199"}}>保存</Button>

          </List>
        </div>
      </SettingContainer>
    )
  }
}

const Setting = createForm()(Test);

export default Setting