import React, { PureComponent } from 'react'
import BgContainer from './StyledBg'

export default class LoginBg extends PureComponent {
  render() {
    return (
      <BgContainer>
        {this.props.children}
      </BgContainer>
    )
  }
}
