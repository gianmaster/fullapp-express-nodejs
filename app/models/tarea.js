var mongoose = require('mongoose');

module.exports = mongoose.model('Tarea', {
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  prioridad: {
    type: Number,
    required: true
  },
});
