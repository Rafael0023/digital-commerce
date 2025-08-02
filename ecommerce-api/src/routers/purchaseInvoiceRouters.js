const express = require('express')
const { getPurchaseInvoice, getPurchaseInvoiceById, createPurchaseInvoice, updatePurchaseInvoiceById, deletePurchaseInvoice } = require('../controllers/purchaseInvoiceController')


const routersPurchaseInvoice = express.Router()

routersPurchaseInvoice.get('/',getPurchaseInvoice)
                      .get('/:id',getPurchaseInvoiceById)
                      .post('/',express.json(), createPurchaseInvoice)
                      .put('/:id',updatePurchaseInvoiceById)
                      .delete('/:id',deletePurchaseInvoice)
                      
module.exports ={ routersPurchaseInvoice }