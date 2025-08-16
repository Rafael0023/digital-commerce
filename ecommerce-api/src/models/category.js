const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: String,
  image: String,
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
    timestamp: true

});
module.exports = mongoose.model('Category',CategorySchema) 