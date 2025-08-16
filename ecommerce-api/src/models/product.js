const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  salePrice: {
    type: Number,
    min: 0
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  images: [{
    url: String,
    isPrimary: {
      type: Boolean,
      default: false
    }
  }],
  features: [{
    name: String,
    value: String
  }],
  tags: [String],
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },

  inventory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Inventory'
  }
}, {
  timestamp: true
});

ProductSchema.index({ name: 'text', description: 'text', tags: 'text' });
ProductSchema.index({ category: 1, price: 1 });



module.exports = mongoose.model('Product', ProductSchema) 