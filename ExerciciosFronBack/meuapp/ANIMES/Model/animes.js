const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100,
    },

    genero: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    sinopse: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 9999,
    },
    nota: {
        type: Number,
        required: true,
        min: 0,
        max: 10,
    },
    emLancamento: {
        type: Boolean,
        required: true,
        default: true,
    },
    estudio: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100,
    },
});
mongoose.model('animes', userSchema);