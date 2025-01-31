const mysql = require('mysql');


const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "iva22017",
    database: "lima"
});

module.exports = connection;