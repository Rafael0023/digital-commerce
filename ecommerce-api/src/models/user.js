const mongoose = require('mongoose');
const validator = require('validator')
const UserSchema = mongoose.Schema({

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

    }

})
module.exports = mongoose.model('User', UserSchema)