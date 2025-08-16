const mongoose = require('mongoose');


const AddressSchema = mongoose.Schema({
    customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  type: {
    type: String,
    enum: ['home', 'work', 'other'],
    default: 'home'
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: String,
  postalCode: String,
  country: {
    type: String,
    default: 'Colombia'
  },

}, { 
    timestamp: true
});
module.exports = mongoose.model('Address',AddressSchema) 
