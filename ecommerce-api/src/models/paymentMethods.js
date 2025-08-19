const mongoose = require('mongoose');

const PaymentMethodsSchema =  mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  type: {
    type: String,
    enum: ['credit_card', 'debit_card', 'paypal', 'bank_transfer'],
    required: true
  },
  provider: {
    type: String,
  },
  token: {
    type: String, 
  },
  cardholderName: {
    type: String,
    uppercase: true
  },
  lastDigits: {
    type: String,
    minlength: 4,
    maxlength: 4
  },
  expMonth: {
    type: Number,
    min: 1,
    max: 12
  },
  expYear: {
    type: Number
  },
  isPrimary: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('PaymentMethod', PaymentMethodsSchema);
