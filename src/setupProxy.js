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

  app.use('/pic', proxy({
    target: 'http://lvyunfei.com',
    changeOrigin: true,
  }))

  app.use('/community', proxy({
    target: 'http://localhost:9099',
    changeOrigin: true,
    pathRewrite: {
      '^/community': ''
    }
  }))

  app.use('/userlist', proxy({
    target: 'http://localhost:9001',
    changeOrigin: true
  }))
}