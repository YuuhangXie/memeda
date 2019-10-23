import React, { Component } from 'react'
import { SetnickContainer, BorderDiv, BorderUl } from './StyledSetnick'
import BindHead from '../BindHead'
import ApiService from 'utils/api.service'
import Storage from 'utils/storage'


import herPng from 'images/login/herAva.png'

export default class Setnick extends Component {

  state = {
    sex: 'man',
    nickName: '',
  }


  handleSex = (value)=>{
    this.setState({
      sex: value
    }) 
  }

  handleNickChange = (e)=>{
    this.setState({
      nickName: e.target.value
    })
  }

  handleSetSub = async()=>{
    if(!this.state.nickName){
      alert('请输入昵称')
    } else {
      let id = Storage.get('user_id')
      let age = Math.ceil(Math.random()*(40-20) + 20)
      let data = {
        sex: this.state.sex === 'man' ? '男' : '女',
        nickname: this.state.nickName,
        age: age
      }
      await ApiService.patch('/userlist/' + id, data)
      this.props.history.push('/userbind/binding')
    }
  }

  async componentDidMount(){
    let phone = Storage.get('user_id')
    let userData = await ApiService.get('/userlist/'+phone)
    let myNickName = userData.nickname
    let myBindStytus = userData.bind_status
    // console.log(myNickName, myBindStytus)
    if(myNickName === ''){
      return ''
    } else if(myBindStytus === false){
      this.props.history.push('/userbind/binding/bind')
    } else {
      this.props.history.push('/index/home')
    }
  }

  render() {
    return (
      <SetnickContainer>
        <BindHead
          text="请设置基本信息"
          back={()=>{this.props.history.go(-1)}}
        ></BindHead>
        <div className="setWrap">
          <div className="headImgWrap">
            <div className="headImg">
              <img src={herPng} alt="头像"/>
            </div>
            <p>设置头像</p>
          </div>
          <div className="setNickWrap">
            <p>设置昵称</p>
            <BorderDiv>
              <input 
                type="text" 
                placeholder="必须设置昵称呦" 
                onChange={this.handleNickChange}
                value={this.state.nickName}
              />
            </BorderDiv>
          </div>
          <div className="setSexWrap">
            <BorderUl>
              <li className={this.state.sex === 'man' ? 'active' : ''} onClick={()=>this.handleSex('man')}>男</li>
              <li className={this.state.sex === 'woman' ? 'active' : ''} onClick={()=>this.handleSex('woman')}>女</li>
            </BorderUl>
          </div>

          <div className="setSubmit" onClick={this.handleSetSub}>
            完成
          </div>
          

        </div>
      </SetnickContainer>
    )
  }
}
