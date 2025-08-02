const mongoose = require('mongoose');

const PurchaseInvoiceSchema =  mongoose.Schema({
  supplier: {
    type: String,
    required: true 
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true 
      },
   
      quantity: {
        type: Number,
        min: 1,
        required: true  
      }
    }
  ],
  total: {
    type: Number,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PurchaseInvoice', PurchaseInvoiceSchema);
