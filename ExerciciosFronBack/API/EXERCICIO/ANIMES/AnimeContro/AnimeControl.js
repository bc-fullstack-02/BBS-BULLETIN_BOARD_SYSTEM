const animeservice = require('../ServicoAnime/Animeservice');
module.exports = {
    getAnime: async (req, res) => {
        const id = req.params.id;
        const anime = await animeservice.getAnime(id);
        res.status(200).json(anime);
    },
    postAnime: async (req, res) => {
        const anime = req.body;
        const animeCriado = await animeservice.postAnime(anime);
        res.status(201).json(animeCriado);
    },
    putAnime: async (req, res) => {
        const id = req.params.id;
        const anime = req.body;
        const animeAtualizado = await animeservice.putAnime(id, anime);
        res.status(200).json(animeAtualizado);
    },
    deleteAnime: async (req, res) => {
        const id = req.params.id;
        await animeservice.deleteAnime(id);
        res.status(204).end();
    },
};
