// endPoint.js

const express = require('express');
const router = express.Router();

const { recetas, crearReceta } = require('../controladores/pingController');

const {login} = require('../controladores/loginController')

// Define la ruta /ping
router.get('/recetas', recetas);

router.post('/recetas',crearReceta);


router.post('/login', login)



module.exports = router;
