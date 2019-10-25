import React, { Component } from 'react'


import moment from 'moment'

import Back from 'images/gift/back.png'

import { SettingContainer } from './StyledSetting'

import {  DatePicker, Picker, List, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

import storage from 'utils/storage.js'

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

        storage.set('period', { 'lasttime' : moment(this.props.form.getFieldsValue().lasttime).format('ll'), 'distance' : this.props.form.getFieldsValue().distance[0]})

        this.props.history.push("/memeda/period/home")
        
      } else {
        alert('请填写完整资料');
      }
    });
  }

  componentDidMount(){
    let result = {
      "distance": [
        {
          "label": "15天",
          "value": 15
        },
        {
          "label": "20天",
          "value": 20
        },
        {
          "label": "25天",
          "value": 25
        },
        {
          "label": "30天",
          "value": 30
        },
        {
          "label": "35天",
          "value": 35
        },
        {
          "label": "40天",
          "value": 40
        },
        {
          "label": "45天",
          "value": 45
        }
      ]
    }
    this.setState({
      distance: result.distance
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