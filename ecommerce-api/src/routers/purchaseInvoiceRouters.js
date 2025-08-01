const express = require('express')
const { getPurchaseInvoice } = require('../controllers/purchaseInvoiceController')

const routersPurchaseInvoice = express.Router()

routersPurchaseInvoice.get('/',getPurchaseInvoice)
                      
module.exports ={ routersPurchaseInvoice }