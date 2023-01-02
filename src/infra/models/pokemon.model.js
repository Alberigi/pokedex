const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        require: true,  
    },
    type: {
        type: String,
        require: true,  
    },
    image: {
        type: String,
        require: true,  
    },
})

module.exports = mongoose.model('pokemon', PokemonSchema);
