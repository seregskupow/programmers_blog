const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    date: {
        type: Date,
        default: Date.now
    },
    text:{
        type:String,
        required:true,
        min:20,
        max:5000
    }

});

module.exports = mongoose.model('Post', postSchema);
