const mongoose = require('mongoose');

const InventoryMovementSchema =  mongoose.Schema({
  inventory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Inventory',
    required: true
  },
  type: {
    type: String,
    enum: ['in', 'out', 'adjustment'],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  previousQuantity: {
    type: Number,
    required: true
  },
  newQuantity: {
    type: Number,
    required: true
  },
  reason: {
    type: String,
    enum: ['purchase', 'sale', 'return', 'adjustment', 'damage'],
    required: true
  },
  reference: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'referenceModel'
  },
  referenceModel: {
    type: String,
    enum: ['Order', 'Adjustment']
  },
  notes: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('InventoryMovement', InventoryMovementSchema);
