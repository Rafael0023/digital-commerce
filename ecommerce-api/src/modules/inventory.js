const mongoose = require('mongoose') 

const InventorySchema = mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  type: { type: String, enum: ['entrada', 'salida'], required: true },
  quantity: { type: Number, required: true },
  reference: { type: String }, 
  createdAt: { type: Date, default: Date.now }

})
module.exports = mongoose.model('Inventory', InventorySchema) 

