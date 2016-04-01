var Tarea = require('../models/tarea');
var Controller = require('../controllers/tareaController');

module.exports = function(app){
  //solo para las apis
  app.get('/api/users', function(req, res){
    res.json([
      {
        name: 'Giancarlos Cercado',
        is: 'the best in the world'
      },
      {
        name: 'Bella',
        is: 'Her girlfriend'
      }
    ]);
  });

//crear una tarea
  app.post('/api/tarea', Controller.setTarea);

  //unica vista para renderear la pagina inicial
  app.get('*', function(req, res){
    res.render('index');
  });


};
