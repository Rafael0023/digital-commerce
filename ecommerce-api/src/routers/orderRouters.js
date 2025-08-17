const { getOrder, getOrderById, createOrder, deleteOrderById } = require('../controllers/orderController.js')
const express = require('express')

const routersOrder = express.Router()

routersOrder.get('/',getOrder )
routersOrder.get('/:id',getOrderById )
routersOrder.post('/',express.json(),createOrder)
routersOrder.delete('/:id',deleteOrderById)

module.exports = {
     routersOrder
}
       
            

