const mongoose = require('mongoose');

const ProductSchema  = mongoose.Schema({

    name:{
        type: String,
        require:true
    },
    description:{
        type: String,
        default: ""
    },
    stock:{
        type: Number,

    },
    price:{
        type: Number,
        min:0
    },
    createAt:{
        type: Date,
        default: Date.now
    },

})
module.exports = mongoose.model('Product', ProductSchema) 