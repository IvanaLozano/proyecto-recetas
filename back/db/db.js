const mysql = require('mysql');


const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "",
    database: "lima"
});

module.exports = connection;
