const mongoose = require('mongoose')

const InventorySchema = mongoose.Schema({
 
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
    unique: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  minimumStock: {
    type: Number,
    default: 5
  },
  location: String,
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Inventory', InventorySchema)

