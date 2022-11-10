const express = require('express');
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    return res.json({
        id: 1,
        nome: "benevanio santos",
        idade: 30,
        email: "BENEVANIOSANTOS930@GMAIL.COM",
        telefone: "11999999999",
        endereco: "rua tal",
        numero: 123,
        bairro: "bairro tal",
        cidade: "são paulo",
        estado: "sp",
        cep: "00000000",
        complemento: "complemento tal",
        status: "ativo"

    });
});
app.listen(666, () => console.log('listening at 666'));