const {getInvoice,getInvoiceById,createInvoice,deleteInvoiceById} = require('../controllers/orderController.js')
const express = require('express')

const routersOrder = express.Router()

routersSalesInvoice.get('/',getInvoice )
routersSalesInvoice.get('/:id',getInvoiceById )
routersSalesInvoice.post('/',express.json(),createInvoice )
routersSalesInvoice.delete('/:id',deleteInvoiceById)

module.exports = {
     routersOrder
}
       
            

