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
        min:0,
        default:0

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