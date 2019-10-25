import React, { Component } from 'react'

import {
  withRouter
} from 'react-router-dom'

import {
  PublishContainer,
  BorderPublish
} from './StyledShare'

class Publish extends Component {
  handleClick = () => {
    this.props.history.push('/memeda/diary/add', {from: 'comm'})
  }

  render() {
    return (
      <BorderPublish> 
        <PublishContainer>
          <img src={this.props.user !== 'undefined' ? this.props.user.head_img : 'https://via.placeholder.com/150'} alt=""/>
          <p>秀恩爱，来这里就对了~</p>
          <em onClick={this.handleClick}>+</em>
        </PublishContainer>
      </BorderPublish>
    )
  }
}

export default withRouter(Publish)