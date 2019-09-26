# 么么哒 - 情侣恋爱神器

### `yarn start`
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```

### `yarn mock`
```
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
2. 每天早上第一件事（开发前）切换到dev分支进行拉取最新代码并且合并到自己的分支上，切勿动不属于自己部分的代码
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
      id: 12345  // 第二个参数为传输的数据数组 自动转换成为querystring
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