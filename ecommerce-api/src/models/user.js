const mongoose = require('mongoose');
const validator = require('validator')
const UserSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    lastname: {
    type : String,
    require : true,

   },

    email: {
        type: String,
        require: true,
        unique: true,
        lowercase:true,
        validate: {
            validator: function (v) {
                return validator.isEmail(v);
            },
            message: props => `${props.value} invalid value`
        }
    },
    password: {
        type: String,
        require: true,

    },
    rol:{
        type: String,
        enum: ['admin','customer'],
        default: 'customer',
    },
    state:{
        type:Boolean,
        default: true,
    }
    
},{
    timestamp:true

});
module.exports = mongoose.model('User', UserSchema)