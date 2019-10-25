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
    target: 'https://lvyunfei.com',
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

  app.use(['/ourwish', '/mywish', '/tawish', '/giftavatar'], proxy({
    target: 'http://localhost:9139',
    changeOrigin: true
  }))

  app.use('/diarycontent', proxy({
    target: 'http://localhost:9089',
    changeOrigin: true
  }))

  app.use('/album', proxy({
    target: 'http://localhost:9889',
    changeOrigin: true
  }))

  app.use('/home', proxy({
    target: 'http://localhost:9789',
    changeOrigin: true
  }))
}