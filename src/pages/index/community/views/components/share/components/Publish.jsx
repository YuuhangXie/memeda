import React, { Component } from 'react'

import {
  PublishContainer,
  BorderPublish
} from './StyledShare'

export default class Publish extends Component {
  render() {
    return (
      <BorderPublish>
        <PublishContainer>
          <img src={this.props.user ? this.props.user.head_address : 'https://via.placeholder.com/150'} alt=""/>
          <p>秀恩爱，来这里就对了~</p>
          <em>+</em>
        </PublishContainer>
      </BorderPublish>
    )
  }
}
