const fs = require('fs');
const path = require('path');

const dbFilePath = path.join(__dirname, '../db.json');

// Función para leer el archivo JSON
function readJSONFile(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

// Función para escribir en el archivo JSON
function writeJSONFile(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Obtener las recetas
module.exports.recetas = (req, res) => {
    try {
        const db = readJSONFile(dbFilePath);
        res.json(db.recetas);
    } catch (error) {
        res.status(500).send(error);
    }
}

// Crear una nueva receta con un ID incremental
module.exports.crearReceta = (req, res) => {
    const { nombre, ingredientes, receta, idCategoria, imagen } = req.body;

    try {
        let db = readJSONFile(dbFilePath);

        // Asegurarse de que todos los IDs sean números
        const ids = db.recetas.map(r => Number(r.id)).filter(id => !isNaN(id));
        console.log('IDs existentes:', ids); // Depuración
        const lastId = ids.length > 0 ? Math.max(...ids) : 0;
        console.log('Último ID:', lastId); // Depuración
        const newId = lastId + 1;
        console.log('Nuevo ID:', newId); // Depuración

        const newReceta = { id: newId, nombre, ingredientes, receta, idCategoria, imagen };
        db.recetas.push(newReceta);

        writeJSONFile(dbFilePath, db);

        // Enviar respuesta de éxito con el nuevo ID
        res.status(201).json({ message: 'Receta creada exitosamente', id: newId });
    } catch (error) {
        console.error('Error al crear la receta:', error);
        res.status(500).send(error);
    }
}
