# 么么哒 - 情侣恋爱神器

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

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
** 如何使用？**
#### `get`
> 如果需要get请求并且需要发送数据，请用此api
*** 示例 ***
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

### `post`
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

** 同理其他也同样使用方法，具体操作请查看 [axios](https://www.npmjs.com/package/axios) **

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