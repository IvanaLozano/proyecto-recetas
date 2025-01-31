const connection = require('../db/db')


//obtener las recetas
module.exports.recetas = (req, res) =>{
    const consult = 'SELECT * FROM recetas';
    try {
        connection.query(consult, (err, results) =>{
            console.log(results)
            res.json(results)
        })
        
    } catch (error) {
        
    }
}

module.exports.crearReceta = (req, res) => {
    const { nombre, ingredientes, receta, idCategoria, imagen } = req.body;
    const query = 'INSERT INTO recetas (nombre, ingredientes, receta, idCategoria, imagen) VALUES (?, ?, ?, ?, ?)';
    
    connection.query(query, [nombre, ingredientes, receta, idCategoria, imagen], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err.stack);
            return res.status(500).json({ error: 'Error inserting data' });
        }
        res.status(201).json({ message: 'Receta creada exitosamente', id: result.insertId });
    });
};




