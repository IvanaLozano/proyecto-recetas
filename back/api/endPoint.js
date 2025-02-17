// endPoint.js

const express = require('express');
const router = express.Router();

// Importar controladores
const { recetas, crearReceta } = require('../controladores/pingController');
const { login } = require('../controladores/loginController');

// Rutas para recetas
router.get('/recetas', recetas);
router.post('/recetas', crearReceta);

// Ruta para login
router.post('/login', login);

module.exports = router;
