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
  cardholderName: String,   // Name on the card
  lastDigits: String,       // Last 4 digits
  expirationDate: String,   // MM/YY
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

module.exports = mongoose.model('PaymentMethods', PaymentMethodsSchema);
