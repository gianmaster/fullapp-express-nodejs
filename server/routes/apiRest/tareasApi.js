//recibe como parametro el server configurado
var Controller = require('../../controllers/TareaController');

module.exports = function(app){

  //api para obtener todas las tareas
  app.get('/api/tareas', Controller.getTareas);
  //api para crear una nueva tarea
  app.post('/api/tarea', Controller.setTarea);
  //api para actualizar una tarea
  app.put('/api/tarea/:tarea_id', Controller.updateTarea);
  //api para eliminar una tarea
  app.delete('/api/tarea/:tarea_id', Controller.removeTarea);

}
