const product = require('../models/product.js')

 function getProducts (req, res)  {
    product.find().then(data => {
        res.send(JSON.stringify(data))
    })
}

function getProductsById (req, res)  {
    const id = req.params.id
    product.findById(id).then((data) => {
        console.log(data)
        !data ? res.status(404).json({ message: 'error product not found' })
            : res.send(data)
    })
}

function createProductsById(req, res)  {
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

}

async function updateProductByID  (req, res) {
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


}

function deleteProductsById (req, res) {
    const id = req.params.id
    product.findByIdAndDelete(id).then(data => {
        !data? res.status(404).json({message:'product not found'}):
        res.send('product deleted')
    }
    )

}

module.exports = {
    getProducts,
    getProductsById,
    createProductsById,
    updateProductByID,
    deleteProductsById
}