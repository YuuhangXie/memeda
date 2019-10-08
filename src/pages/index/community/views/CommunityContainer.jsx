import React, { useState, useCallback, useEffect } from 'react'

import {
  Route,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom'

import { 
  CommunityContainer,
  CommunityContent 
} from "./StyledCommunity";

import Share from './components/share/Share'
import Rank from './components/rank/Rank'
import Store from './components/store/Store'
import Tree from './components/tree/Tree'

function Community (props) {
  let path = props.match.path
  let [curr, setCurr] = useState('lovershare')

  const handleClick = useCallback(curr => {
    setCurr(curr)
    props.history.push(path + '/' + curr)
  }, [props, path])

  useEffect(() => {
    setCurr(props.location.pathname.split('/')[3])
  }, [props])

  return (
      <CommunityContainer>
        <header>
          社区
        </header>
        <nav>
          <ul>
            <li onClick={() => handleClick('lovershare')}>
              恩爱区
              <span className={curr === 'lovershare' ? 'active' : ''}></span>
            </li>
            <li onClick={() => handleClick('rank')}>
              恩爱榜
              <span className={curr === 'rank' ? 'active' : ''}></span>
            </li>
            <li onClick={() => handleClick('store')}>
              情侣商店
              <span className={curr === 'store' ? 'active' : ''}></span>
            </li>
            <li onClick={() => handleClick('tree')}>
              爱情树
              <span className={curr === 'tree' ? 'active' : ''}></span>
            </li>
          </ul>
        </nav>
        <CommunityContent>
          <Switch>
            <Route path={`${path}/lovershare`} component={Share}></Route>
            <Route path={`${path}/rank`} component={Rank}></Route>
            <Route path={`${path}/store`} component={Store}></Route>
            <Route path={`${path}/tree`} component={Tree}></Route>
            <Redirect exact from={path} to={`${path}/lovershare`}></Redirect>
          </Switch>
        </CommunityContent>
      </CommunityContainer>
  )
}

export default withRouter(Community)