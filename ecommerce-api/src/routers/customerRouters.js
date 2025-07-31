const express = require('express')
const{getCustomers,getCustomersById,createCustomersById,updateCustomersById,deleteCustomersById}=require('../controllers/customerController')
const routersCustomers = express.Router()



routersCustomers.get('/',getCustomers )
                .get('/:id', express.json(),getCustomersById )
                .post('/', express.json(),createCustomersById )
                .put('/:id', express.json(),updateCustomersById )
                .delete('/:id',deleteCustomersById )

module.exports = {
    routersCustomers
}
