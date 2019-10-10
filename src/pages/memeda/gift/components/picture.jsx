import React, { Component } from 'react'

import {
  GiftContainer,
  AlbumContainer
} from '../view/StyledGift'

export default class Home extends Component {

  back(e) {
      this.props.changeProps(e)
  }

  render() {
    return (
        <GiftContainer>
            <div className="update-ava">
                <div className="picture-container">
                <div className="photo update-box">
                    <span className="photo-name">拍照</span>
                    <input type="file" accept="image/*" capture="camera" onChange={() => {  }}></input>
                </div>
                <AlbumContainer>
                    <div className="album update-box">
                    <span className="photo-name">从相册选择</span>
                    <input type="file" accept="image/*" onChange={() => {  }}/>
                    </div>
                </AlbumContainer>
                <div className="delete update-box" onClick={(e) => this.back(e)}>取消</div>  
                </div>
            </div>
        </GiftContainer>
    )
  }
}