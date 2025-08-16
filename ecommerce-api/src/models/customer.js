const mongoose = require("mongoose");


const CustomerSchema = mongoose.Schema({
   user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
   },
   address: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address' 
   }],
   dateOfBirth: {
      type: Date,
   },
   phone: {
      type: String,
      require: true,
   },
   paymentMethods: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PaymentMethods'
   }]

}, {
   timestamp: true
});
module.exports = mongoose.model('Customer', CustomerSchema);