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
const create = (products, type, reference) => {

    products.map(async item => {


        await product.findByIdAndUpdate(item.product._id, {
            $set: {
                stock: item.quantity,
            }
        }, { new: true }).then(data => console.log(data))

    })


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



module.exports = {
    getListInventory,
    getById,
    create,
    updateById,
    deleteById

}