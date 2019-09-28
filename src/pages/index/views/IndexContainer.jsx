import React, { Component } from 'react'
import connect from './connect'

import {
  IndexContainer,
  NavContainer
} from './StyledIndex'

// 引入组件 (临时模板)
// import Chat from '../chat/Chat'
// import Home from '../home/Home'
// import Community from '../community/Community'
// import Fund from '../fund/Fund'
// import Profile from '../profile/Profile'

// 实际引用组件位置
// import { Chat } from '../chat/'
// import Home from '../home/'
// import Community from '../community/'
// import Fund from '../fund/'
// import Profile from '../profile/'

@connect
class Index extends Component {
  async componentDidMount() {
    
    // redux
    this.props.loadData()
    this.props.loadAsyncData()
  }

  componentDidUpdate() {
    console.log(this.props)
  }

  render() {
    return (
      <IndexContainer>
        <NavContainer>
          
        </NavContainer>
      </IndexContainer>
    )
  }
}

export default Index