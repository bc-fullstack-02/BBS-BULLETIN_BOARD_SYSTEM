const express = require('express')
const router = express.Router()
const Animecontrol = require('./AnimeContro/animecontrol')
router.get('/animes', Animecontrol.getAnime)
router.get('/animes/:id', Animecontrol.getAnime)
router.post('/animes', Animecontrol.postAnime)
router.put('/animes/:id', Animecontrol.putAnime)
router.delete('/animes/:id', Animecontrol.deleteAnime)



module.exports= router;