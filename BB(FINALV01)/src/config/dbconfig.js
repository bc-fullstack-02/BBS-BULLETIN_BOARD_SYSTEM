const mongoose = require('mongoose');

const dbconfig = 'mongodb+srv://BB:369369@cluster0.occoylc.mongodb.net/Users?retryWrites=true&w=majority';
const connection = mongoose.connect(dbconfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;