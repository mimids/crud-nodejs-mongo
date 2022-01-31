var mongoose = require('mongoose')
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;

var schema = new mongoose.Schema({

    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    birthday: {
        type: Date,
        default: ''},
    lat: {
        type: SchemaTypes.Double,
        default: ''},
    lng: {
        type: SchemaTypes.Double,
        default: ''},
});

var user = new mongoose.model('user', schema);

module.exports = user