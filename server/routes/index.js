//todo
var Tarea = require('../models/tarea');//no se porque va este
//carga de todas las routes

module.exports = function(app){

  //////////API//////////////
  //devolver todas las Tareas
  require('./apiRest/tareasApi')(app);

  //////WEB/////////
  app.get('*', function(rep, res){
    res.render('index', { title: 'Full express app'}); //carga unica de la vista
  });

}
