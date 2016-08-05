var mongoose = require('mongoose');

var Shopping = mongoose.Schema({
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Products'
    }]
});

module.exports = mongoose.model('Shopping',Shopping);