const Order = require('../models/order.js')

const get = () => {
    return Order.find()
}

const getById = (id) => {
    return  Order.findById(id)
   
    
}
const create = ( customer,
        products, total)=>{
 
    const newOrder = new Order({ customer,
        products, total})
        return newOrder.save()

}
module.exports = {
    get,
    getById,
    create,

}