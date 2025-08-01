const inventory = require('../models/inventory.js')
const product = require('../models/product.js')
const getListInventory = () => {

    return inventory.find()
}

const getById = (id) => {
    if (!id) {
        return 'id invalid'
    }
    return inventory.findById(id)
}
const create = async (products, type, reference) => {
      if (!['entrada', 'salida'].includes(type)) {
    throw new Error('Tipo de inventario no válido');
  }
   updateStock(products,type)

    const newInventory = new inventory({ products, type, reference })
    return newInventory.save()
}
const updateById = (id, products, type, reference) => {

    return inventory.findByIdAndUpdate(id, {
        $set: {
            products, type, reference
        }
    }, { new: true })
}
const deleteById = (id) => {
    return inventory.findByIdAndDelete(id)
}
async function updateStock  ( products, type) {

         await Promise.all( products.map(async item => {
        const productId = item.product._id
        const existingProduct = product.findById(productId)
        if (!existingProduct){
             throw new Error(`Producto con ID ${productId} no encontrado`) 
            }
            const update = type === 'entrada'
      ? { $inc: { stock: item.quantity } }
      : { $inc: { stock: -item.quantity } };
            

        await product.findByIdAndUpdate(productId, update, 
          { new: true })

    }))
}

module.exports = {
    getListInventory,
    getById,
    create,
    updateById,
    deleteById

}