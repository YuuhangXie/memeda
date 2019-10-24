import React, { Component } from 'react'
import ApiService from 'utils/api.service'
import Storage from 'utils/storage'
import styled from 'styled-components'
import NoticebindBG from 'images/login/login-noticebind.png'
// import herPng from 'images/login/herAva.png'

const NoticeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  p{
    height: .2rem;
    width: 100%;
    position: absolute;
    top: 7%;
    left: 50%;
    transform: translateX(-50%);
    line-height: .2rem;
    font-size: .14rem;
    text-align: center;
    color: #ddd;
  }

  .notice-bind{
    position: absolute;
    top: 6%;
    left: 50%;
    transform: translateX(-50%);
    width: 3.04rem;
    height: 3.66rem;
    border-radius: .05rem;
    background: url(${NoticebindBG}) no-repeat center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    .head-img{
      width: .74rem;
      height: .74rem;
      border-radius: 50%;
      overflow: hidden;
      margin-top: .5rem;
      img{
        width: .74rem;
        height: .74rem;
        border-radius: 50%;
      }
    }
    .notice-text, .notice-nick{
      height: .22rem;
      line-height: .22rem;
      text-align: center;
      font-size: .14rem;
      color: #fff;
    }
    .notice-nick{
      margin-top: .06rem;
    }
    .notice-text{
      margin: .17rem 0;
    }
    .accept{
      width: 2.06rem;
      height: .5rem;
      font-size: .17rem;
      line-height: .5rem;
      text-align: center;
      background: #f09199;
      color: #fff;
      border-radius: .05rem;
    }
    .refused{
      width: .7rem;
      height: .26rem;
      line-height: .26rem;
      text-align: center;
      font-size: .17rem;
      color: #fff;
      margin-top: .32rem;
    }

  }
`

export default class Notice extends Component {

  state = {
    noticeBind: false,
    nickName: '',
    halfHeadImg: ''
  }

  async componentDidMount(){
    let phone = Storage.get('user_id')
    // 本手机号
    this.phone = phone
    // 本账号数据
    this.userData = await ApiService.get('/userlist/' + phone)
    // 本账号的被邀请lovercode
    let invitateBind = this.userData.invited_to_bind
    // 邀请者的数据
    this.invitateData = await ApiService.get('/userlist?lover_code='+invitateBind)
    if(this.invitateData.bind_status){
      this.props.history.push('index/home')
    } else if(invitateBind){
      this.setState({
        noticeBind: true,
        halfNickName: this.invitateData[0].nickname,
        halfHeadImg: this.invitateData[0].head_img
      })
    }
    // console.log(this.phone, userData, invitateBind)
    // console.log(this.invitateData)
  }

  haldleAccept = async() => {
    // 邀请者的数据
    let { id, sex, nickname, head_img, age, lover_code } = this.invitateData[0]
    let data = {
      "bind_status": true,
      "bind_info": {
        "id": id,
        "sex": sex,
        "nickname": nickname,
        "head_img": head_img,
        "age": age,
        "lover_code": lover_code
      }
    }
    await ApiService.patch('/userlist/'+this.phone, data)
    // 设置对方的数据
    let halfData = {
      "bind_status": true,
      "bind_info": {
        "id": this.phone,
        "sex": this.userData.sex,
        "nickname": this.userData.nickname,
        "head_img": this.userData.head_img,
        "age": this.userData.age,
        "lover_code": this.userData.lover_code
      }
    }
    await ApiService.patch('/userlist/'+id, halfData)
    this.props.history.push('/index/home')
  }

  handleRefused = async() => {
    let data = {
      "invited_to_bind": ""
    }
    await ApiService.patch('/userlist/'+this.phone, data)
    this.setState({
      noticeBind: false
    })
  }
  
  


  render() {
    return (
      <NoticeContainer>
        { !this.state.noticeBind ? 
          <p className="notice-msg">暂无通知消息</p> 
          : <div className="notice-bind">
              <div className="head-img">
                <img src={this.state.halfHeadImg} alt="头像"/>
              </div>
              <div className="notice-nick">{this.state.halfNickName}</div>
              <div className="notice-text">请求与你绑定</div>
              <div className="accept" onClick={this.haldleAccept}>接受</div>
              <div className="refused" onClick={this.handleRefused}>我不认识</div>
            </div>
        }
      </NoticeContainer>
    )
  }
}
