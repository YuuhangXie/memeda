import React, { Component } from "react";

import { DateLineContainer } from './StyledPhoto'

import { PullToRefresh } from 'antd-mobile'
import _ from 'lodash'
import storage from 'utils/storage.js'

class photoUI extends Component {
    state = {
        refreshing: false,
        down: true,
        height: document.documentElement.clientHeight
    }

    render() {
        return(
            <div className="photo-container">
                <PullToRefresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
                    height: this.state.height,
                    overflow: 'auto',
                    }}
                    indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                    direction={this.state.down ? 'down' : 'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                    this.setState({ refreshing: true });
                    setTimeout(() => {
                        this.setState({ refreshing: false });
                    }, 1000);
                    }}
                >
                    {_.reverse(this.props.photoData.photoList).map((value, index) => {
                    return(
                        <div className="album-box" key={value.id}>
                            <DateLineContainer>
                                <div className="time-box">
                                    <span className="month">{value.date.split('-')[2]}</span>
                                    <span className="date">{value.date.split('-')[1]}月{value.date.split('-')[0]}</span>
                                </div>
                            </DateLineContainer>
                            <div className="content-box">
                                <span className="photo-content">{value.content}</span>
                                <div className="photo-container">
                                    {value.pic.map((value, index) => {
                                        return(
                                            <div className="little-photo-box" key={'photo'+index}>
                                                <img src={value} alt="albumPhoto" onClick={(e) => { storage.set('target_img', e.target.src);this.props.pathHandler('/memeda/album/watch') }}/>
                                            </div>
                                        )
                                    })}
                                </div>
                                <span className="photo-moment">{value.date.split('-')[3] + ':' + value.date.split('-')[4]}</span>
                            </div>
                        </div>
                    )
                })}
                </PullToRefresh>
                
            </div>
        )
    }
    
}

export default photoUI