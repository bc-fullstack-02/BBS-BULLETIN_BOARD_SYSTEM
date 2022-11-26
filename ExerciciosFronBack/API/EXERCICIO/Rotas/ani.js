const express = require('express');
const { route } = require('../lancamento');
const router = express.Router();

router.get ('/', (req, res) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de animes'
    });
   

}
);
router.post ('/', (req, res) => {
    res.send('O palmeiras nao tem mundial!');
}
);
router.delete ('/', (req, res) => {
    res.send('O palmeiras nao tem mundial!');
}
);
router.put ('/', (req, res) => {
    res.send('O palmeiras nao tem mundial!');
}
);
router.patch ('/', (req, res) => {
    res.send('O palmeiras nao tem mundial!');
}
);
module.exports = router;