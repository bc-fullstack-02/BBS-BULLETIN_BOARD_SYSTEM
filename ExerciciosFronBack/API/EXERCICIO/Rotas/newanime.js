const express = require('express');
const router = express.Router();

router.get ('/', (req, res) => {
    res.status(200).send({
        mensagem: 'Estamos na pagina novos animes'
    });
})
router.post('/', (req, res) => {
    const anime = {
        nome: req.body.nome,
        genero: req.body.genero,
        episodios: req.body.episodios,
        ano: req.body.ano,
        estudio: req.body.estudio,
        sinopse: req.body.sinopse,
        nota : req.body.nota
        }
    res.status(201).send(
        novoAnime = anime,
    
    );
}
);
router.put('/', (req, res) => {
    res.send('Pegando novos animes!');
}
);
module.exports = router;