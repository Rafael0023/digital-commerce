const Order = require('../models/order.js')

const getListOrder = () => {
    return Order.find()
}

const getOrderById = (id) => {
    return  Order.findById(id)
   
    
}
const createOrder = ( customer,
        products, total)=>{
 
    const newOrder = new Order({ customer,
        products, total})
        return newOrder.save()

}
module.exports = {
    getListOrder,
    getOrderById,
    createOrder,

}