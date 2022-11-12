const database = require('../models/database');
database.exports = {
    create(req) {
        const { id, nome, idade, email, telefone, endereco, numero, bairro, cidade, estado, cep, complemento, status } = req.body;
        console.log(id);
        console.log(nome);
        console.log(idade);
        console.log(email);
        console.log(telefone);
        console.log(endereco);
        console.log(numero);
        console.log(bairro);
        console.log(cidade);
        console.log(estado);
        console.log(cep);
        console.log(complemento);
        console.log(status);
    }
}