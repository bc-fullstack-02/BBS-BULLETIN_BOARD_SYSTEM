const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"369369",
    database:"anime"
});
connection.connect(function(err){
    if(err) throw err;
    console.log("Conectado com sucesso!" + connection.threadId);
    
});
module.exports = connection;