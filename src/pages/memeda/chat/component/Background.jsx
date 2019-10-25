import React, { Component } from 'react'

import { BackgroundContainer } from './StyledBackground'
import Back from 'images/gift/back.png'

import { ImagePicker, WingBlank } from 'antd-mobile';
import storage from 'utils/storage.js'

const data = [{
  url: 'http://lvyunfei.com/pic/background.png',
  id: '2121'
}, {
  url: 'http://lvyunfei.com/pic/background0.png',
  id: '2122'
}];

export default class Background extends Component {

  state = {
    files: data,
  }

  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }

  onImageClick = (index, fs) => {
    console.log(fs[index].url)
    storage.set('imgAdd', {'imgadd': fs[index].url})
    this.props.history.push('/memeda/chat/home')
  }
  
  clickHandler() {
    this.props.history.goBack()
  }
  
  render() {
    const { files } = this.state;

    return (
      <BackgroundContainer>
         <div className="background-container">
          
          <div className="header-container">
            <div className="back" onClick={() => this.clickHandler()}>
              <img src={Back} alt="返回" />
            </div>
            <span className="title">聊天背景</span>

          </div>

          <div className="background-body">
              <div className="album">
                推荐背景
              </div>

              <WingBlank>
                <ImagePicker
                  files={files}
                  onChange={this.onChange}
                  onImageClick={this.onImageClick}
                  selectable={files.length < 7}
                  length="3"
                />
              </WingBlank>
          </div>
          
        </div>
        

      </BackgroundContainer>
    )
  }
}
