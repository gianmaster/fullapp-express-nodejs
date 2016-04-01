var Tarea = require('../models/tarea');

//creacion de una nueva tarea
exports.setTarea = function(req, res){
  Tarea.create({
    nombre :req.body.nombre,
    descripcion :req.body.descripcion,
    prioridad :req.body.prioridad
  }, function(err, tarea){
    if(err) res.send(err);
    Tarea.find(function(err, tarea){
      if(err) res.send(err);
      res.json(tarea);
    });
  });
};
