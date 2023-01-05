const mongoose = require('mongoose');

const TypeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        require: true,  
    }
})

module.exports = mongoose.model('type', TypeSchema);
