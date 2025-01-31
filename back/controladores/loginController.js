const connection = require('../db/db')
const jwt = require('jsonwebtoken')

module.exports.login = (req, res) =>{
    const {usuario, contra} = req.body;
    console.log(usuario);
    console.log(contra);

    //validación de la base de datos
    const consult = 'SELECT * FROM login WHERE usuario = ? AND contra = ?';

    try {
        connection.query(consult, [usuario, contra], (err, result) =>{
            if(err){
                res.send(err);
            }

            if(result.length > 0){
                const token = jwt.sign ({usuario}, "stack", {
                expiresIn: '5m'
            });

                // console.log(result);
                res.send({token});

            }else{
                console.log("worng user");
                res.send({message: "wrong user"})
            }
        })
    } catch (error) {
        
    }
    
}
