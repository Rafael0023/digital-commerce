const {getInvoice,getInvoiceById,createInvoice,deleteInvoiceById} = require('../controllers/salesInvoiceController.js')
const express = require('express')

const routersSalesInvoice = express.Router()

routersSalesInvoice.get('/',getInvoice )
routersSalesInvoice.get('/:id',getInvoiceById )
routersSalesInvoice.post('/',express.json(),createInvoice )
routersSalesInvoice.delete('/:id',deleteInvoiceById)

module.exports = {
    routersSalesInvoice
}
       
            

