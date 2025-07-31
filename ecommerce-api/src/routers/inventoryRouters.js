const express = require('express') 
const routersInventory =  express.Router()
const {getInventory, getInventoryById, createInventory, updateInventoryById, deleteInventoryById} = require('../controllers/inventoryController.js')

routersInventory.get('/', getInventory )
                .get('/:id',getInventoryById )
                .post('/',express.json(),createInventory)
                .put('/:id', express.json(),updateInventoryById )
                .delete('/:id',deleteInventoryById )


module.exports = {

    routersInventory
}
