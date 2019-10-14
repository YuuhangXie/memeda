import React, { Component } from 'react'

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

  render() {
    return (
        <GiftContainer>
            <div className="update-ava">
                <div className="picture-container">
                <div className="photo update-box">
                    <span className="photo-name">拍照</span>
                    <input type="file" accept="image/*" capture="camera" onChange={() => { console.log(1) }}></input>
                </div>
                <AlbumContainer>
                    <div className="album update-box">
                    <span className="photo-name">从相册选择</span>
                    <input ref="tip" type="file" multiple accept="image/*" onChange={() => { console.log(this.refs.tip.value) }}/>
                    </div>
                </AlbumContainer>
                <div className="delete update-box" onClick={(e) => this.back(e, this.state.address)}>取消</div>  
                </div>
            </div>
        </GiftContainer>
    )
  }
}