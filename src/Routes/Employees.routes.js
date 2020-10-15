const { Router }  = require('express');
/** Llama al enroutador de URl en express */
const router = Router();


//Importar el Controller
const employeesController = require('../Controllers/Employees.controller.js');
//CRUD Employees

//CREATE - READ - UPDATE - DELETE
//RUTAS llamado
router.get('/hello',employeesController);
 


module.exports = router;