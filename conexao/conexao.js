const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // senha do mysql
  database: "fanaticossports",
});

connection.connect((erro) => {
    if (erro) {
        console.error("Erro ao conectar ao banco de dados:", erro);
    } else {
        console.log("banco conectado com sucesso.");
        return;
    }
});

module.exports = conexao;