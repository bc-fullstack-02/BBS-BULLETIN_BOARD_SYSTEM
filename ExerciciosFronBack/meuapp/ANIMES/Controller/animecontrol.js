const mongoose = require('mongoose');
const animes = mongoose.model('animes');

module.exports ={
    async insert(req, res){
        const animes = await animes.create(req.body);
        return res.json(animes);
    },
    async list(req, res){
        const animes = await animes.find();
        return res.json(animes);
    },
    async listOne(req, res){
        const animes = await animes.findById(req.params.id);
        return res.json(animes);
    },

}