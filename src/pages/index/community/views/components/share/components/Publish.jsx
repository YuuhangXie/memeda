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
          <img src="https://www.xyhthink.com/img/head.jpg" alt=""/>
          <p>秀恩爱，来这里就对了~</p>
          <em>+</em>
        </PublishContainer>
      </BorderPublish>
    )
  }
}
