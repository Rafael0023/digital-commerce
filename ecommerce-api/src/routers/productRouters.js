const express = require('express')
const product = require('../modules/product.js')

const routersProducts = express.Router()

routersProducts.get('/', (req, res) => {

    product.find().then(data => {
        res.send(JSON.stringify(data))

    })
})

routersProducts.get('/:id', (req, res) => {
    const id = req.params.id
    product.findById(id).then((data) => {
        !data ? res.status(404).json({ message: 'error product not found' })
            : res.send(data)
    })
})

routersProducts.post('/', express.json(), (req, res) => {
    const {
        name,
        description,
        stock,
        price } = req.body

    const newProduct = new product({
        name,
        description,
        stock,
        price
    })
    newProduct.save()
    res.send('product saved')

})

routersProducts.put('/:id', express.json(), async (req, res) => {
    const id = req.params.id
    const {
        name,
        description,
        stock,
        price } = req.body
    const productUdate = await product.findByIdAndUpdate(id, {
        $set: {
            name, 
            description, 
            stock, 
            price,     
        }
        
    },
    {new:true});
    !productUdate?res.status(404).json({message:'product not found'})
    :res.send(JSON.stringify(productUdate))


})
routersProducts.delete('/:id',(req, res)=> {
    const id = req.params.id
    product.findByIdAndDelete(id).then(data => {
        !data? res.status(404).json({message:'product not found'}):
        res.send('product deleted')
    }
    )

})

module.exports = {routersProducts}
