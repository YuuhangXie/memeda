import React, { Component } from 'react'
import styled from 'styled-components'
import border from 'components/styled/border'
import ApiService from 'utils/api.service'
import Storage from 'utils/storage'
// import herPng from 'images/login/herAva.png'

import { ActionSheet, WingBlank, Button, Toast } from 'antd-mobile';



const TrueBindContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .show-lover{
    position: absolute;
    top: 11.3%;
    left: 50%;
    transform: translateX(-50%);
    height: .84rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    p{
      width: 1.15rem;
      height: .2rem;
      text-align: center;
      line-height: .2rem;
      font-size: .14rem;
      color: #000;
    }
    .lover-ipt{
      width: 2.76rem;
      height: .44rem;
      padding: 0 .08rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input{
        border: none;
        font-size: .16rem;
        color: #707070;
        padding-left: .12rem;
        flex: 1;
      }
      span{
        width: .61rem;
        height: .25rem;
        border-radius: .05rem;
        background: #F09199;
        font-size: .12rem;
        text-align: center;
        line-height: .25rem;
        color: #fff;
      }
    }
  }

  .invitate-wrap{
    height: 1rem;
    width: 100%;
    position: absolute;
    top: 33%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    span{
      width: 3.45rem;
      height: .56rem;
      border-radius: .05rem;
      text-align: center;
      line-height: .56rem;
      font-size: .17rem;
      color: #fff;
      background: #f09199;
    }
  }

  .am-button{
    background: none !important;
    height: 100% !important;
  }
  .am-wingblank{
    margin-left: 0 !important;
    margin-right: 0 !important;
    height: 100% !important;
  }


  .cancel-bind{
    height: 1.4rem;
    width: 100%;
    position: absolute;
    top: 4.3%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .head-img{
      width: .74rem;
      height: .74rem;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: .74rem;
        height: .74rem;
        border-radius: 50%;
      }
    }
    p{
      font-size: .14rem;
      height: .2rem;
      line-height: .2rem;
      color: #191717;
    }
    span{
      width: 1rem;
      height: .3rem;
      text-align: center;
      line-height: .3rem;
      font-size: .14rem;
      color: #fff;
      background: #f09199;
      border-radius: .05rem;
    }
  }

  /* .invitate-wrap{
    height: 1rem;
    width: 100%;
    position: absolute;
    top: 33%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    span{
      width: 3.45rem;
      height: .56rem;
      border-radius: .05rem;
      text-align: center;
      line-height: .56rem;
      font-size: .17rem;
      color: #fff;
      background: #f09199;
    }
    p{
      height: .2rem;
      text-align: center;
      line-height: .2rem;
      font-size: .14rem;
      color: #000;
    }
  } */
`
const BorderDiv = border({
  width: '1px',
  color: '#ddd',
  radius: 5,
  comp: styled.div``
})



// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let wrapProps;
// if (isIPhone) {
//   wrapProps = {
//     onTouchStart: e => e.preventDefault(),
//   };
// }
class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: 'none',
      clicked1: 'none',
      clicked2: 'none',
    };
  }

  dataList = [
    { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  ].map(obj => ({
    icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
    title: obj.title,
  }));


  showShareActionSheet = () => {
    ActionSheet.showShareActionSheetWithOptions({
      options: this.dataList,
      // title: 'title',
      message: '邀请另一半加入么么哒！',
    },
    (buttonIndex) => {
      this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
      // also support Promise
      return new Promise((resolve) => {
        Toast.info('正在熬夜开发中！',1);
        setTimeout(resolve, 200);
      });
    });
  }

  render() {
    return (
    <WingBlank>
      <Button onClick={this.showShareActionSheet}>邀请另一半加入</Button>
    </WingBlank>);
  }
}







export default class TrueBind extends Component {

  state = {
    myLover: '',
    halfLover: '',
    halfHeadImg:'',
    willBind: false
  }

  handleBind= async () => {
    if(!this.state.halfLover){
      alert("请输入另一半真爱码")
    } else {
      let hasLoverCode = await ApiService.get('/userlist?lover_code='+this.state.halfLover)
      if(isNaN(Number(this.state.halfLover)) || hasLoverCode.length === 0 || hasLoverCode[0].lover_code === this.state.myLover || hasLoverCode[0].bind_info.id !== '' || hasLoverCode[0].bind_status){
        alert("请输入正确的真爱码")
      } else {
        let data = {
          will_bind_info: Number(this.state.halfLover)
        }
        let halfData = {
          invited_to_bind: this.state.myLover
        }
        await ApiService.patch('/userlist/'+this.phone, data)
        let halfPhone = hasLoverCode[0].id
        let halfHeadImg = hasLoverCode[0].head_img
        Storage.set('half_id', halfPhone)
        this.setState({
          halfHeadImg: halfHeadImg
        })
        await ApiService.patch('/userlist/'+halfPhone, halfData)
        this.setState({
          willBind: true
        })

        // console.log(hasLoverCode)
        // console.log(halfLoverCode)
      }
    
    }
  }

  halfLoverChange = (e) => {
    this.setState({
      halfLover: e.target.value
    })
  }
  

  async componentDidMount(){
    this.phone = Storage.get('user_id')
    let userData = await ApiService.get('/userlist/' + this.phone)
    let myLover= userData.lover_code
    let willBindInfo = userData.will_bind_info
    // let invitedBindNum = userData.invited_to_bind
    this.setState({
      myLover: myLover
    })
    if(willBindInfo){
      let halfData = await ApiService.get('/userlist?lover_code='+willBindInfo)
      // let halfHeadImg = halfData[0].head_img
      console.log(halfData)
      this.setState({
        willBind: true,
        halfHeadImg: halfData[0].head_img
      })
    } 
    // else if(invitedBindNum) {
    //   let halfData = await ApiService.get('/userlist?lover_code='+invitedBindNum)
    //   // let halfHeadImg = halfData[0].head_img
    //   console.log(halfData)
    //   this.setState({
    //     willBind: true,
    //     halfHeadImg: halfData[0].head_img
    //   })
    // }
    // if(willBindInfo || invitedBindNum){
    //   let halfData = await ApiService.get('/userlist?lover_code='+willBindInfo)
    //   // let halfHeadImg = halfData[0].head_img
    //   console.log(halfData)
    //   this.setState({
    //     willBind: true,
    //     halfHeadImg: halfData[0].head_img
    //   })
    // }
  }

  cancelBind = async () => {
    let myPhone = Storage.get('user_id')
    let halfPhone = Storage.get('half_id')
    let myData = {
      will_bind_info: ""
    }
    let halfData = {
      invited_to_bind: ""
    }
    ApiService.patch('/userlist/'+myPhone, myData)
    ApiService.patch('/userlist/'+halfPhone, halfData)
    this.setState({
      willBind: false
    })
  }
  

  render() {
    return (
      <TrueBindContainer>
        { !this.state.willBind ? 
          <div className="show-lover">
            <p>真爱码：{this.state.myLover}</p>
              <BorderDiv className="lover-ipt">
                <input 
                  type="text" 
                  placeholder="输入另一半真爱码"
                  onChange={this.halfLoverChange}
                  value={this.state.halfLover}
                />
                <span onClick={this.handleBind}>绑定</span>
              </BorderDiv>
          </div> 
        : <div className="cancel-bind">
            <div className="head-img">
              <img src={this.state.halfHeadImg} alt="头像"/>
            </div>
            <p>请求已发出，等待对方接受</p>
            <span onClick={this.cancelBind}>取消请求</span>
          </div>
        }
        

        <div className="invitate-wrap">
          <span><Test/></span>
          <p>体验全部情侣功能需要先绑定另一半</p>
        </div>
      </TrueBindContainer>
    )
  }
}
