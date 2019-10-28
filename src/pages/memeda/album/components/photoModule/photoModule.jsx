import React, { Component } from 'react'

import PhotoUI from './photoUI'
import { PhotoContainer} from './StyledPhoto'

import ApiService from 'utils/api.service.js'
import storage from 'utils/storage.js'
import _ from 'lodash'

class PhotoModule extends Component {
    
        state = {
            photoList: [],
            hide: false
        };
    

    async componentDidMount() {
        this.setState({
            photoList: await ApiService.get('/album')
        })
        storage.set('photoContent', _.reverse(this.state.photoList))
    }

    componentDidUpdate() {
        storage.remove('newImgList')
    }

    render() {
        return (
            <PhotoContainer>
                <PhotoUI
                    photoData={this.state}
                    pathHandler={this.props.routerHandler}
                ></PhotoUI>
            </PhotoContainer>
        )
  }
}

export default PhotoModule