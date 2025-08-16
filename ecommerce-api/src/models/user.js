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
UserSchema.pre('save',async function(next){
    if (!this.isModified('password')) {
        return next();        
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();

});
UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', UserSchema)