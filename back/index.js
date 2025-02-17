require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000; // Usa el puerto definido en .env o 3000 por defecto

const routes = require('./api/endPoint');

// Middleware para parsear JSON y datos urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de CORS
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"]
}));

// Configuración de rutas
app.use('/', routes);

// Inicio del servidor
app.listen(port, () => {
    console.log(`Ejemplo app escuchando en el puerto ${port}`);
});
