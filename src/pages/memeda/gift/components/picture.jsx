import React, { Component } from 'react'

import ApiService from 'utils/api.service.js'

import {
  GiftContainer,
  AlbumContainer
} from '../view/StyledGift'

export default class Home extends Component {
  state = {
    address: ''
  }

  back(e, address) {
      this.props.changeProps(e, address)
  }

  getDataURL(e){
    Array.from(e.target.files).forEach(element => {
      var reader = new FileReader()
      reader.onload = function(e) {
        var url = e.target.result
        console.log(url)
      }
      reader.readAsDataURL(element)
    })
  }

  async setImage(files, e) {
    e.persist()
    
    if(files[0].name.match(/\.jpg|\.gif|\.png|\.bmp/i)) {
      let data = new FormData();
      let arr = files[0].name.split(".");
      let ext = arr[arr.length - 1];
      let randomNum = parseInt(Math.random() * 100000);
      data.append('img_name', `profile_headimg_${randomNum}`);
      data.append('img', files[0]);
      let result = await ApiService.customRequest({
        url: '/pic/photo/save',
        method: 'post',
        headers: {
          'content-type': 'multipart/form-data'
        },
        data
      });
      if(result.ret) {
        await ApiService.patch('/giftavatar/' + this.props.indexMsg.target, {
          imgAddress: `http://lvyunfei.com/pic/profile_headimg_${randomNum}.${ext}`,
          id: this.props.indexMsg.target
        })
        this.props.changeProps(e)
      }
    } else {
      alert("请选择正确的图片格式!");
    }
  }

  render() {
    return (
        <GiftContainer>
            <div className="update-ava">
                <div className="picture-container">
                <div className="photo update-box">
                    <span className="photo-name">拍照</span>
                    <input ref="caremaIpt" type="file" accept="image/*" capture="camera" onChange={(e) => { this.setImage(e.target.files, e) }}></input>
                </div>
                <AlbumContainer>
                    <div className="album update-box">
                    <span className="photo-name">从相册选择</span>
                    <input ref="albumIpt" type="file" accept="image/*" onChange={(e) => { this.setImage(e.target.files, e) }}/>
                    </div>
                </AlbumContainer>
                <div className="delete update-box" onClick={(e) => this.back(e, this.state.address)}>取消</div>  
                </div>
            </div>
        </GiftContainer>
    )
  }
}