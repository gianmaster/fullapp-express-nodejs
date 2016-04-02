var config = require('./config/params'),
  express = require('express'),
  app = express(),
  server = require('http').Server(app),
  mongoose = require('mongoose'),
  io = require('socket.io'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  cookieParser = require('cookie-parser'),
  engine = require('ejs-mate');

//levantar la conexion con mongoDB
mongoose.connect('mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.name);

/*
||||||||||CONFIGURACION DE EXPRESS |||||||||
*/
//engine para las plantillas
app.engine('ejs', engine);
app.set('views', __dirname + '/server/views');
app.set('view engine', 'ejs');
//configuracion de las rutas estaticas
app.use(express.static('client/src'));
//configuracion del servidor
var urlencodedParser = bodyParser.urlencoded({ extended: false });//para recibir los parametros y tener metodos request
var jsonParser = bodyParser.json(); // para que solo los request y responser sean json -> usado en apis
app.use(cookieParser());
app.use(urlencodedParser);
require('./server/routes/index')(app);


//lenvantamos el servidor express
app.listen(config.server.port, function(err){
  if(err) console.log('Se cayó de oreja');
  console.log('Servidor escuchando en el puerto ' + config.server.port);
});

config.server.env === 'production' ? null : module.exports = app;
