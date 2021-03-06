var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT || 5000;

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/index.html')
})
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });

http.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})