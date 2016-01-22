var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppSchema = new Schema({
    name: String,
    description: String,
    language: String
});

module.exports = mongoose.model('App', AppSchema);
