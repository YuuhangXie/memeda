import React, { Component } from 'react'

import { BackgroundContainer } from './StyledBackground'
import Back from 'images/gift/back.png'

import { ImagePicker, WingBlank } from 'antd-mobile';

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
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
                  onImageClick={(index, fs) => console.log(index, fs)}
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
