import React, { PurComponent } from 'react'
import BgContainer from './StyledBg'

export default class LoginBg extends PurComponent {
  render() {
    return (
      <BgContainer>
        {this.props.children}
      </BgContainer>
    )
  }
}
