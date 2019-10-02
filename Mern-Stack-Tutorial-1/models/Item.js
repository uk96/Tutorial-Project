const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

//Create Scheme
const ItemScheme = new Scheme({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}); 

module.exports = Item = mongoose.model('Item', ItemScheme);
