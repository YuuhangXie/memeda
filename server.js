var express = require('express')
var http = require('http')

var app = express()
app.use(express.static('public'))

// 创建服务器socket
var httpServer = http.createServer(app)
var io = require('socket.io')(httpServer)

io.on('connect', function(socket){
  console.log('有人上线了');
  socket.on('msg_from_client', function(msg){
    console.log("msg_from_client:" + msg)
    io.emit("msg_from_server", msg)
  })
})

httpServer.listen(8888, function(){
  console.log('running on 8888');
  
})