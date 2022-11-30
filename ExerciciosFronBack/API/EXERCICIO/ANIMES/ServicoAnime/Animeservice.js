const db = require('../dbanime');
module.exports= {
    getAnime: async (id) => {
        const anime = await db('animes').where({id}).first();
        return anime;
    },
    postAnime: async (anime) => {
        const [id] = await db('animes').insert(anime);
        return id;
    },
    putAnime: async (id, anime) => {
        await db('animes').where({id}).update(anime);
        return anime;
    },
    deleteAnime: async (id) => {
        await db('animes').where({id}).del();
    }

};