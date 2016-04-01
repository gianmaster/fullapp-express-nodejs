var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var config = require('./config/params');
var mongoose = require('mongoose');

//conexion con la base de datos de MongoDB


//configuracion de donde estan los ficheros estaticos
app.use(express.static(__dirname + '/client/src'));

//levantando el servidor
server.listen(config.server.port, function(err){
  if(err) console.log('No se puedo levantar el servidor');
  console.log('servidor escuchando en el puesto '+ config.server.port);
});

var defaultMessages = require('./data');

io.on('connection', function(socket){
  //emit -> esto emite un evento y envia como paramtro un objeto
  socket.emit('messages', defaultMessages);

//on -> este escucha un evento que es disparado desde el cliete
  socket.on('new-message', function(data){
    defaultMessages.push(data);
    io.sockets.emit('messages', defaultMessages);
  });

});
