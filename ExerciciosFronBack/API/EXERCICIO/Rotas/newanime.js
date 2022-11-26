const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Retornar todos animes!');
}
);
router.post('/', (req, res) => {
    res.send('adicionar novos animes!');
}
);
router.put('/', (req, res) => {
    res.send('Pegando novos animes!');
}
);
module.exports = router;