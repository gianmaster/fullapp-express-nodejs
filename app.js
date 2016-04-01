var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var config = require('./config/params');
var mongoose = require('mongoose');
var logger = require('express-logger');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer'); //libreria-middleware para aceptar subida de  archivos
var engine = require('ejs-mate');
//codificacion de trama url con bodyParser --middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//solo trama json para las apis --middleware
var jsonParser = bodyParser.json();

//conexion con la base de datos de MongoDB
mongoose.connect('mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.name);


//configuracion del servidor
app.use(express.static('client/src'));
app.use(cookieParser());
app.use(urlencodedParser);

app.engine('ejs', engine);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');
//app.use(logger({ path: __dirname + '/storage/logs'}));

//carga de rutas de la aplicacion
require('./app/routes/index')(app);

//levantando el servidor
server.listen(config.server.port, function(err){
  if(err) console.log('No se puedo levantar el servidor');
  console.log('servidor escuchando en el puerto '+ config.server.port);
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
