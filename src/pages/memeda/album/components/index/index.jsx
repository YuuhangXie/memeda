import React, { Component } from 'react'

import IndexUI from './indexUI'
import { AlbumContainer } from '../../view/StyledAlbum'

import ApiService from 'utils/api.service.js'
import storage from 'utils/storage.js'

class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false,
            imgList: []
        };
    }

    routerHandler(path) {
        this.props.history.push(path)
    }

    additionHandler(event) {
        event.stopPropagation()
        this.setState({
            hide: !this.state.hide
        })
    }

    setImage(files, e) {
        e.persist()
        Object.keys(files).forEach( async key => {
            if(files[key].name.match(/\.jpg|\.gif|\.png|\.bmp/i)) {
                let data = new FormData();
                let arr = files[key].name.split(".");
                let ext = arr[arr.length - 1];
                let randomNum = parseInt(Math.random() * 100000);
                data.append('img_name', `profile_headimg_${randomNum}`);
                data.append('img', files[key]);
                let result = await ApiService.customRequest({
                    url: '/pic/photo/save',
                    method: 'post',
                    headers: {
                        'content-type': 'multipart/form-data'
                    },
                    data
                });
                if(result.ret) {
                    if(storage.get('newImgList')) {
                        storage.set('newImgList', [
                            ...storage.get('newImgList'),
                            `http://lvyunfei.com/pic/profile_headimg_${randomNum}.${ext}`
                        ])
                    }
                    else storage.set('newImgList', [
                        `http://lvyunfei.com/pic/profile_headimg_${randomNum}.${ext}`
                    ])
                    if(storage.get('newImgList') && storage.get('newImgList').length === Array.from(files).length)this.props.history.push('/memeda/album/add')
                }
                } else {
                    alert("请选择正确的图片格式!");
                }
        } )
    }

  render() {
    return (
        <AlbumContainer>
            <IndexUI
                hide={this.state.hide}
                routerHandler={this.routerHandler.bind(this)}
                additionHandler={this.additionHandler.bind(this)}
                setImage={this.setImage.bind(this)}
            ></IndexUI>
        </AlbumContainer>
    )
  }
}

export default Diary