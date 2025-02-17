const fs = require('fs');
const path = require('path');

const usuariosFilePath = path.join(__dirname, '../data/usuarios.json');

// Función para leer el archivo JSON
function readJSONFile(filePath) {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

// Obtener todos los usuarios
module.exports.recetas = (req, res) => {
    try {
        const usuarios = readJSONFile(usuariosFilePath);
        res.json(usuarios);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Crear un nuevo usuario
module.exports.crearReceta = (req, res) => {
    const newUsuario = req.body;

    try {
        let usuarios = readJSONFile(usuariosFilePath);
        usuarios.push(newUsuario);

        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, 2));
        res.status(201).send(newUsuario);
    } catch (error) {
        res.status(500).send(error);
    }
};
