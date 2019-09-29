import React, { useState, useCallback, useEffect } from 'react'

import {
  Route,
  withRouter,
  Redirect,
  Switch
} from 'react-router-dom'

import {
  IndexContainer,
  NavContainer,
  MainContainer
} from './StyledIndex'

// 引入组件 (临时模板)
import Chat from '../chat/Chat'
import Home from '../home/Home'
import Community from '../community/Community'
import Fund from '../fund/Fund'
import Profile from '../profile/Profile'

import chat from 'images/tablebar/chat.png'
import community from 'images/tablebar/community.png'
import communityActive from 'images/tablebar/community-active.png'
import home from 'images/tablebar/home.png'
import homeActive from 'images/tablebar/home-active.png'
import fund from 'images/tablebar/fund.png'
import fundActive from 'images/tablebar/fund-active.png'
import profile from 'images/tablebar/profile.png'
import profileActive from 'images/tablebar/profile-active.png'

// 实际引用组件位置
// import { Chat } from '../chat/'
// import Home from '../home/'
// import Community from '../community/'
// import Fund from '../fund/'
// import Profile from '../profile/'

function Index (props) {
  let path = props.match.path
  let [curr, setCurr] = useState('home')

  useEffect(() => {
    setCurr(props.location.pathname.split('/')[2])
  }, [props])

  const handleClick = useCallback(curr => {
    setCurr(curr)
    props.history.push(path + '/' + curr)
  }, [path, props])

  return (
    <IndexContainer>
      <MainContainer>
        <Switch>
          <Route path={`${path}/home`} component={Home}></Route>
          <Route path={`${path}/chat`} component={Chat}></Route>
          <Route path={`${path}/community`} component={Community}></Route>
          <Route path={`${path}/fund`} component={Fund}></Route>
          <Route path={`${path}/profile`} component={Profile}></Route>
          <Redirect from={`${path}`} exact to={`${path}/home`}></Redirect>
        </Switch>
      </MainContainer>
      <NavContainer>
        <ul>
          <li onClick={() => handleClick('chat')}>
            <img className="bar-img1" src={chat} alt=""/>
            <span className={curr === 'chat' ? 'active' : ''}>悄悄话</span>
          </li>
          <li onClick={() => handleClick('community')}>
            <img className="bar-img2" src={curr === 'community' ? communityActive : community} alt=""/>
            <span className={curr === 'community' ? 'active' : ''}>社区</span>
          </li>
          <li onClick={() => handleClick('home')}>
            <img className="bar-img3" src={curr === 'home' ? homeActive : home} alt=""/>
            <span className={curr === 'home' ? 'active' : ''}>么么哒</span> 
          </li>
          <li onClick={() => handleClick('fund')}>
            <img className="bar-img4" src={curr === 'fund' ? fundActive : fund} alt=""/>
            <span className={curr === 'fund' ? 'active' : ''}>爱情基金</span> 
          </li>
          <li onClick={() => handleClick('profile')}>
            <img className="bar-img5" src={curr === 'profile' ? profileActive : profile} alt=""/>
            <span className={curr === 'profile' ? 'active' : ''}>我的</span> 
          </li>
        </ul>
      </NavContainer>
    </IndexContainer>
  )
}

export default withRouter(Index)