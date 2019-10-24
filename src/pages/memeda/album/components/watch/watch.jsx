import React, { Component } from 'react'

import storage from 'utils/storage.js'

import { WatchContainer } from './StyledWatch'

class WatchModule extends Component {

    render() {
        return (
            <WatchContainer>
                <div className="watch-box">
                    <div className="target-img-container">
                        <img src={storage.get('target_img')} alt="targetImg" onClick={() => {this.props.history.push('/memeda/album/index')}}/>
                    </div>
                </div>
            </WatchContainer>
        )
  }
}

export default WatchModule