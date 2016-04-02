var Tarea = require('../models/tarea');

//funcion que lista todas las tareas
function getTareas(res){
  Tarea.find(function(err, tareas){
    if(err)
      res.send(err);

    res.json(tareas);
  });
}

//Obtiene todas las tareas de la base de datos
exports.getTareas = function(req, res){
  getTareas(res);
};

//Guarda un objeto tarea en la base de datos
exports.setTarea = function(req, res){
  Tarea.create({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    nivelPrioridad: req.body.nivelPrioridad,
  }, function(err, tarea){
    if(err)
      res.send(err);

      getTareas(res);
  })
};

// Modificamos un objeto Persona de la base de datos
exports.updateTarea = function(req, res){
	Tarea.update( {_id : req.params.tarea_id},
					{$set:{nombre : req.body.nombre,	descripcion: req.body.descripcion, nivelPrioridad: req.body.nivelPrioridad}},
					function(err, tarea) {
						if (err)
							res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
			     getTareas(res);
			});
	}

exports.removeTarea = function(req, res){
  Tarea.remove({
    _id: req.params.tarea_id
  }, function(err, tarea){
    if(err)
      res.send(err);

    getTareas(res);
  })
}
