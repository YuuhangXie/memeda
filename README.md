# 么么哒 - 情侣恋爱神器

### `yarn start`
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```

### `yarn mock`
```
在src/mock目录下创建自己的mock数据文件夹，文件名为模块的名
 // 示例
 Resources
  http://localhost:9000/test

  Other routes
  /api/test -> /test
```

## 代码基本结构
```
src/assets -  静态文件
src/assets/styles - 初始化css样式表
src/assets/images - 图片存储
src/components - 公共组件
src/mock - 模拟mock数据
src/pages - 项目模块部分 
src/utils - 项目通用工具库
src/setupProxy.js - 代理
public - 公共文件勿动
config-overrides.js - 项目配置
··· 未完待续
```

## 关于git
1. 在属于自己的dev-xxx分支上开发。每天晚上11点提交到GitHub上面
  具体commit内容为: '09-26-今日写的模块概要
  示例：
```
git add .
git commit -m '09-26-项目初始化，axios封装，路由正在进行中'
git push
```
1. 每天早上第一件事（开发前）切换到dev分支进行拉取最新代码并且合并到自己的分支上，切勿动不属于自己部分的代码
   示例：
```
git checkout dev
git pull
git checkout dev-xxx
git merge --no-ff dev
```


## 工具使用说明
### 关于代理
> 通过查阅create-react-app的官方文档，找到了如下的解决方案。
> 安装http-proxy-middleware管理包，`npm install http-proxy-middleware --save`
> 在项目目录src/下新建setupProxy.js文件，然后写入如下代码:
```js
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use('/api', proxy({
    target: 'http://localhost:9000',
    changeOrigin: true,
  }))
  
  app.use('/data', proxy({
    target: 'http://localhost:9999',
    changeOrigin: true,
  }))
}
```
### axios 
> axios ajax封装在了项目目录src/utils下的api.service.js
> 封装了get、post、delete、put、添加/删除请求头部、还有通用的ajax请求

#### `GET`
如果需要GET请求并且需要发送数据，请用此api

```js
import ApiService from 'utils/api.service'

async componentDidMount() {
let data = await ApiService.get(
  '/api/swiper',  // 第一个参数为请求的url
  {
    params: {
      id: 12345  // 第二个参数为传输的数据 自动转换成为querystring
    }
  })
}
```

### `POST`

如果需要POST请求并且需要发送数据，请用此api

```js
import ApiService from 'utils/api.service'

async componentDidMount() {
let data = await ApiService.post(
  '/api/swiper',  // 第一个参数为请求的url
  {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
}
```

**同理其他也同样使用方法，具体操作请查看 [axios](https://www.npmjs.com/package/axios)** 

### `customRequest`
```js
async componentDidMount() {
  const requestData = {
    method: 'post',
    url: '/login',
    data: {
        username: userName,
        password: password
    }
  }
  const data = await ApiService.customRequest(requestData)
}
```

## 关于notes
> 开发过程中，在自己Markdown上面每天记录今日完成内容，自己模块的目录结构，引用什么模块以及模块基本操作示例，遇到的bug以及解决方案，还有巧妙的、进阶的代码都可以记录，日后留作答、面试使用。

## 关于mock数据
> 请在src/mock/目录下按照模块创建文件夹，文件夹名为可以分辨的名称。数据写完之后在mock.js文件夹进行导入，在route.json添加路由导向信息。
> 具体见test示例
> 启动mock服务 => `yarn mock`

## 关于localstorge
封装了一个localstorge增删改查的工具，在utils/storage.js
工具内部自己封装了JSON.stringify和JSON.parse方法，无需手动转换，建议看下源码
举例：
```js
import storage from 'utils/storage'

// get
let isSignin = storage.get('isSignin')  // 返回值为对象  非字符串

// set
storage.set('userInfo', {
  'username': 'zhangsan',
  'password': '123'
}) // 自动转换为字符串存储

// remove
storage.remove('isSignin)
```

## 关于路由
```js
App.js上面有四组路由
`login` / `register` 跳转到登录注册上，为公共路由
`index` / `memeda` 跳转有导航栏的页面和无需显示导航栏页面，为私有路由。
其中私有路由会判断用户是否已经登录，也就是localstorge中是否有 isSignin 字段，根据需求在进行其他权限验证。  如果需要绕过登录验证需要在localstorge中设置isSignin为true即可。
`index`路由是有tablebar界面的路由，也就是当你需要tablebar显示时候请在index目录下对应自己模块的文件夹进行开发，需要全屏不显示tablebar时候请在memeda目录下面对应自己模块的文件夹进行开发。
也就是说所有路由跳转  除了login/register路由都需要添加index或者memeda前缀。
也就是说需要tablebar路由信息请到pages/index/view/indexContainer.js上面引入添加。
也就是说不需要tablebar路由信息请到pages/memeda/view/MemedaContainer.js上面引入添加。
```

## 关于store
使用immutable + redux + redux-thunk作为全局状态管理
详情请看案例。connect.js
```js
import { connect } from 'react-redux'
import ApiService from 'utils/api.service'


const mapState = (state) => {
  return {
    list: state.getIn(['index', 'list']),  // 树结构 index list
    msg: state.getIn(['index', 'msg'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadData() {
      dispatch({
        type: 'test',
        data: 'synctest'
      })
    },
    async loadAsyncData() {
      let asyncdata = await ApiService.customRequest('/api/test')
      dispatch({
        type: 'asynctest',
        data: asyncdata.msg
      })
    }
  }
}

export default connect(mapState, mapDispatch)
```

## 关于路径写法
```js
['assets']: path.resolve(__dirname, 'src/assets'),
['styles']: path.resolve(__dirname, 'src/assets/styles'),
['pages']: path.resolve(__dirname, 'src/pages'),
['images']: path.resolve(__dirname, 'src/assets/images'),
['components']: path.resolve(__dirname, 'src/components'),
['utils']: path.resolve(__dirname, 'src/utils'),
['store']: path.resolve(__dirname, 'src/store')
// 请务必记住以上起始路径。
```

## 当前目录结构
```
├── App.js
├── assets
│   ├── images
│   └── styles
│       ├── animate.css
│       └── reset.css
├── components
│   └── router
│       └── PrivateRoute.jsx
├── index.js
├── mock
│   ├── mock.js
│   ├── route.json
│   └── test.json
├── pages
│   ├── index
│   │   ├── chat
│   │   ├── community
│   │   ├── fund
│   │   ├── home
│   │   ├── index.js
│   │   ├── profile
│   │   ├── reducer.js
│   │   └── views
│   │       ├── IndexContainer.jsx
│   │       └── IndexUI.jsx
│   ├── memeda
│   │   ├── chat
│   │   ├── community
│   │   ├── fund
│   │   ├── home
│   │   │   └── Home.jsx
│   │   ├── index.js
│   │   ├── profile
│   │   └── views
│   │       ├── MemedaContainer.jsx
│   │       └── components
│   └── user
│       ├── bind
│       ├── login
│       │   ├── index.js
│       │   └── views
│       │       ├── LoginContainer.jsx
│       │       ├── LoginUI.jsx
│       │       └── components
│       └── register
│           ├── index.js
│           └── views
│               ├── RegisterContainer.jsx
│               ├── RegisterUI.jsx
│               └── components
├── serviceWorker.js
├── setupProxy.js
├── store
│   ├── index.js
│   ├── reducer.js
│   └── thunk.js
└── utils
    ├── api.service.js
    └── storage.js
```