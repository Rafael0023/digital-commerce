const mongoose = require('mongoose');
const Counter = require('./counter.js')

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

OrderSchema.pre("save", async function (next) {
  if (!this.orderNumber) {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);  
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); 

    const clave = `${year}${month}`; 
    
    const counter = await Counter.findOneAndUpdate(
      { nombre: clave },
      { $inc: { valor: 1 } },
      { new: true, upsert: true }
    );

    this.orderNumber = `PED-${year}${month}-${counter.valor.toString().padStart(4, "0")}`;
  }
  next();
});

module.exports = mongoose.model('Order', OrderSchema);
