const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    unique: true,
    required: true
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'preparing', 'shipped', 'delivered', 'canceled'],
    default: 'pending'
  },
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String
  },
  paymentMethod: {
    type: String,
    lastDigits: String
  },
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderDetail'
  }],
  subtotal: {
    type: Number,
    required: true
  },
  taxes: {
    type: Number,
    default: 0
  },
  shippingCost: {
    type: Number,
    default: 0
  },
  discounts: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  estimatedDeliveryDate: Date,
  tracking: String,
  notes: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);
