const mongoose = require('mongoose')

const PurchaseInvoice = mongoose.Schema({
    supplier: {
        type: String,
        require: true,
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId, ref: 'Product'
            }
        }
    ],
    quantity: {
        type: Number
    },

    total: {
        type: Number
    },
    createdAt: { type: Date, default: Date.now }

})
module.exports = mongoose.model('PurchaseInvoice', PurchaseInvoice )

