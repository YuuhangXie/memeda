import React from 'react'

// 引入路由组件
import { Route, Switch, Redirect } from 'react-router-dom'

// 引入初始化样式表和动画样式表
import 'styles/reset.css'
import 'styles/animate.css'

// 引入路由模板
import { Index } from 'pages/index/'
import { Memeda } from 'pages/memeda/'
import { Register } from 'pages/user/register'
import { Login } from 'pages/user/login'
import { UserBind } from 'pages/user/userbind'

// 引入私有路由  登录验证
import PrivateRoute from 'components/router/PrivateRoute'

function App() {
  return (
    <Switch>
      <Route path="/Login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/userbind" component={UserBind}></Route>
      <PrivateRoute path="/index" component={Index}></PrivateRoute>
      <PrivateRoute path="/memeda" component={Memeda}></PrivateRoute>
      <Redirect exact from="/" to="/index"></Redirect>
    </Switch>
  )
}

export default App
