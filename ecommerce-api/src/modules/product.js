const mongoose = require('mongoose');

const ProductSchema  = mongoose.Schema({

    name:{
        type: String,
    },
    description:{
        type: String,
    },
    stock:{
        type: Number,
    },
    price:{
        type: Number,
    },
    

})
module.exports = mongoose.model('Product', ProductSchema) 