const {getInvoice,getInvoiceById,createInvoice,deleteInvoiceById} = require('../controllers/invoiceController.js')
const express = require('express')

const routersInvoice = express.Router()

routersInvoice.get('/',getInvoice )
routersInvoice.get('/:id',getInvoiceById )
routersInvoice.post('/',express.json(),createInvoice )
routersInvoice.delete('/:id',deleteInvoiceById)

module.exports = {
    routersInvoice
}
       
            

