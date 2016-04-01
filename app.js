var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var config = require('./config');

//configuracion de donde estan los ficheros estaticos
app.use(express.static('client/src'));

//levantando el servidor
server.listen(config.port, function(err){
  if(err) console.log('No se puedo levantar el servidor');
  console.log('servidor escuchando en el puesto '+ config.port);
});

var defaultMessages = require('./data');

io.on('connection', function(socket){
  console.log('Un cliente se ha conectado');
  socket.emit('messages', defaultMessages);

  socket.on('new-message', function(data){
    console.log('esto es lo que se recibe del cliente', data);
    defaultMessages.push(data);
    io.sockets.emit('messages', defaultMessages);
  });

});
