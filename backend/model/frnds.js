const mongoose = require('mongoose');

const frndschema = new mongoose.Schema({
    name:{type: String, required:true, },
    imageUrls: [String]
});


module.exports =mongoose.model('Friend',frndschema);
