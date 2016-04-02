var mongoose = require('mongoose');

module.exports = mongoose.model('Tareas', {
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  nivelPrioridad: {
    type: Number,
    required: true
  }
});
