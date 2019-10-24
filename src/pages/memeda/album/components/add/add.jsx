import React, { Component } from 'react'

import ApiService from 'utils/api.service.js'
import storage from 'utils/storage.js'

import { AddContainer } from './StyledAdd'
import AddUI from './addUI'

class AddModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList: [],
            determine: false
        };
    }

    componentDidMount() {
        this.setState({
            imgList: storage.get('newImgList')
        })
    }

    showBox() {
        this.setState({
            determine: !this.state.determine
        })
    }

    pathHandler(path) {
        this.props.history.push(path)
    }

    async updateUserMsg(describe, imgList) {
        let date = new Date()
        let result = await ApiService.post('/album/', {
            content: describe,
            date: date.getFullYear() + '-' + this.addZero(date.getMonth()+1) + '-' + this.addZero(date.getDate()) + '-' + this.addZero(date.getHours()) + '-' + this.addZero(date.getMinutes()),
            id: storage.get('photoContent').length + 1,
            pic: [...imgList]
        })

        storage.set('photoContent', result)
        this.props.history.push('/memeda/album/index')
    }

    addZero(time) {
        return time < 10 ? '0' + time : time
      }

    render() {
        return (
            <AddContainer>
                <AddUI
                    imgList={this.state.imgList}
                    determine={this.state.determine}
                    showBox={this.showBox.bind(this)}
                    pathHandler={this.pathHandler.bind(this)}
                    updateUserMsg={this.updateUserMsg.bind(this)}
                ></AddUI>
            </AddContainer>
        )
  }
}

export default AddModule