const express = require('express');
const router = express.Router()

const productoController = require('../controllers/productoController')

router.get('/', productoController.mostrar)
//Crear contacto (POST)
router.post('/crear', productoController.crear)
//Editar contacto (POST)
router.post('/editar', productoController.editar)
//Buscar por apellido (POST)
router.post('/busquedaNombre', productoController.busqueda)
//Borrar contacto (GET)
router.get('/borrar/:id', productoController.borrar)

module.exports = router

//module.exports = router