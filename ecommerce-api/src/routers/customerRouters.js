const express = require('express')
const{getCustomers,getCustomersById,createCustomers,updateCustomersById,deleteCustomersById}=require('../controllers/customerController')
const routersCustomers = express.Router()



routersCustomers.get('/',getCustomers )
                .get('/:id', express.json(),getCustomersById )
                .post('/', express.json(),createCustomers )
                .put('/:id', express.json(),updateCustomersById )
                .delete('/:id',deleteCustomersById )

module.exports = {
    routersCustomers
}
