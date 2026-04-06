const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})

module.exports = conexao