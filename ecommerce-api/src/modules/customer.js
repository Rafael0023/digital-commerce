const mongoose = require("mongoose");


const CustomerSchema = mongoose.Schema({
   name:{
    type : String, 
    require : true,
   },
   lastname: {
    type : String,
    require : true,

   },
   email: {
    type : String,
    require : true,
    unique : true
   },
      address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
   phone: {
    type : String,
    require : true,
   },
   personalId: {
    type: String ,
    require: true
   }

})
module.exports = mongoose.model('Customer', CustomerSchema);