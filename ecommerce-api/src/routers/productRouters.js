const express = require('express')
const {getProducts,getProductsById,createProductsById,updateProductByID,deleteProductsById} = require('../controllers/productController')
const routersProducts = express.Router()

routersProducts
                .get('/',getProducts)
                .get('/:id',getProductsById)
                .post('/', express.json(),createProductsById )
                .put('/:id', express.json(),updateProductByID)
                .delete('/:id', deleteProductsById)

module.exports = {
    routersProducts
}                