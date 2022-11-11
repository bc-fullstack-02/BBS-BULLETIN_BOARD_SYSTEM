const mongoose = require('mongoose');
const databaseSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    idade: Number,
    email: String,
    telefone: String,
    endereco: String,
    numero: Number,
    bairro: String,
    cidade: String,
    estado: String,
    cep: String,
    complemento: String,
    status: String
});

const database = mongoose.model('database', databaseSchema);

module.exports = database;