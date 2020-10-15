var express = require('express');//Import de require
var morgan = require('morgan');//Import morgan muestra las peticiones

//Asigna el esquema de express
const app = express();

//Cambiamos el valor del puerto aca
// revice un puerto definido sino 4000
app.set('port',process.env.PORT || 3000);
//Permite ver las peticiones al navegador
app.get(morgan('dev'));

//
app.use(require('./Routes/Employees.routes.js'));
//Permite exportar app.js a otros modulos
module.exports = app;