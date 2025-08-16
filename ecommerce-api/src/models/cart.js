const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
    unique: true
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    price: {
      type: Number,
      required: true
    },
    addedAt: {
      type: Date,
      default: Date.now
    }
  }],
  total: {
    type: Number,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});


CartSchema.pre('save', function (next) {
  this.total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  this.lastUpdated = new Date();
  next();
});



module.exports = mongoose.model('Cart', CartSchema);
