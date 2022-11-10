const express = require('express');
const app = express();
//estamos usando o JSON
app.use(express.json());
app.get('/', (req, res) => {
    return res.json({
        nome: "NodeJS",
        versao: "12.16.1",
        autor: "Benevanio",
        empresa: "Benetesla"

    });
});
app.listen(666, () => console.log('listening at 666'));