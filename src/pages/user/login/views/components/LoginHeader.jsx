import React, {PureComponent} from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default class LoginHeader extends PureComponent {
  render() {
    return (
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >NavBar</NavBar>
    )
  }
}