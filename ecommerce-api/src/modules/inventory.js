const mongoose = require('mongoose')

const InventorySchema = mongoose.Schema({

  product: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Product',
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  type: {
    type: String,
    enum: ['entrada', 'salida'],
    required: true
  },

  reference: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

})
module.exports = mongoose.model('Inventory', InventorySchema)

