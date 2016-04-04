//cargando modulo
var moduloTest = require('./modules/testModule');
//cargando controladores
require('./controllers/TestController')(moduloTest);
//cargando los servicios
require('./services/tareaService')(moduloTest);

module.exports = moduloTest;
