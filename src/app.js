var express = require('express');//Import de require
var morgan = require('morgan');//Import morgan muestra las peticiones

//Asigna el esquema de express
const app = express();
//Permite ver las peticiones al navegador
app.get(morgan('dev'));
//Permite exportar app.js a otros modulos
module.exports = app;