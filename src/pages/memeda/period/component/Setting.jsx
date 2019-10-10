import React, { Component } from 'react'

import axios from 'utils/api.service.js'

import moment from 'moment'

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
        console.log(moment(this.props.form.getFieldsValue().lasttime).format('ll'),
        this.props.form.getFieldsValue().distance[0]);
        
      } else {
        alert('请填写完整资料');
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

            <Picker data={this.state.distance} cols={1} 
              {...getFieldProps('distance', {
                rules: [
                  { required: true, message: '必须要选择一个间隔' },
                ],
              })} className="forss">
              <List.Item>间隔</List.Item>
            </Picker>
          </List>
          <Button type="primary" size="small" inline onClick={this.onSubmit} style={{"width":"100%", "height" : ".48rem", "lineHeight" : ".48rem",  "fontSize" : ".16rem","background": "#F09199", "marginTop" : ".5rem"}}>保存</Button>
        </div>
      </SettingContainer>
    )
  }
}

const Setting = createForm()(Test);

export default Setting