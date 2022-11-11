const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        id: 1,
        nome: "Bene",
        idade: 25,
        email: "bene369@gmail.com",
        telefone: "11999999999",
        endereco: "Rua dos bobos",
        numero: 0,
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP",
        cep: "00000000",
        complemento: "Casa",
        status: "Ativo"
    });
});
app.listen(666, () => console.log('listening at 666'));