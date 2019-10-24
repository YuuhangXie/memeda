import React, { Component } from 'react'
import { SetnickContainer, BorderDiv, BorderUl } from './StyledSetnick'
import BindHead from '../BindHead'
import ApiService from 'utils/api.service'
import Storage from 'utils/storage'

import { ImagePicker, WingBlank } from 'antd-mobile';


// import herPng from 'images/login/herAva.png'

export default class Setnick extends Component {

  state = {
    sex: 'man',
    nickName: '',
    headImg: '',
    files: [],
    multiple: false
  }



  onChange = (files, type, index) => {
    // console.log(files, type, index);
    this.setState({
      files,
    });
  }
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
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
    } else if(this.state.files.length === 0) {
      alert('请设置头像')
    } else {
      let files = this.state.files
      let imgData = new FormData()
      let imgArr = files[0].file.name.split(".")
      let imgSuffix = imgArr[imgArr.length - 1]
      let randomNum = parseInt(Math.random() * 100000)
      imgData.append('img_name', `profile_headimg_${randomNum}`)
      imgData.append('img', files[0].file)
      let result = await ApiService.customRequest({
        url: '/pic/photo/save',
        method: 'post',
        headers: {
          'content-type': 'multipart/form-data'
        },
        data: imgData
      })
      console.log(result)
      console.log(files[0].file)
      console.log(imgSuffix, randomNum)

      let id = Storage.get('user_id')
      let age = Math.ceil(Math.random()*(40-20) + 20)
      let headImgAdd = `http://lvyunfei.com/pic/profile_headimg_${randomNum}.${imgSuffix}`
      let data = {
        nickname: this.state.nickName,
        sex: this.state.sex === 'man' ? '男' : '女',
        head_img: headImgAdd,
        age: age
      }
      await ApiService.patch('/userlist/' + id, data)
      this.props.history.push('/userbind/binding')

    }
  }
  // handleSetSub = async () => {
  //   // console.log(this.state)
  //   let files = this.state.files
  //   let imgData = new FormData()
  //   let imgArr = files[0].file.name.split(".")
  //   let imgName = imgArr[imgArr.length - 1]
  //   let randomNum = parseInt(Math.random() * 100000)
  //   imgData.append('img_name', `profile_headimg_${randomNum}`)
  //   imgData.append('img', files[0].file)
  //   let result = await ApiService.customRequest({
  //     url: '/pic/photo/save',
  //     method: 'post',
  //     headers: {
  //       'content-type': 'multipart/form-data'
  //     },
  //     data: imgData
  //   })
  //   console.log(result)
  //   console.log(files[0].file)
  //   console.log(imgName, randomNum)
  // }
  // http://lvyunfei.com/pic/profile_headimg_49458.png
  

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

  imgChange = (e) => {
    this.setState({
      headImg: e.target.files
    })
  }

  componentWillUnmount(){
    this.setState({
      sex: 'man',
      nickName: '',
      headImg: '',
      files: []
    })
  }
  

  render() {
    const { files } = this.state;
    return (
      <SetnickContainer>
        <BindHead
          text="请设置基本信息"
          back={()=>{this.props.history.go(-1)}}
        ></BindHead>
        <div className="setWrap">
          <div className="headImgWrap">
            <div className="headImg">
              {/* <img src={herPng} alt="头像"/> */}
              {/* <input className="img-ipt" type="file" accept="image/*" onChange={this.imgChange}/> */}
              <WingBlank>
                <ImagePicker
                  length="1"
                  files={files}
                  onChange={this.onChange}
                  onImageClick={(index, fs) => console.log(index, fs)}
                  selectable={files.length < 1}
                  multiple={this.state.multiple}
                />
              </WingBlank>
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
