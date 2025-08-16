const { json } = require('express')
const order = require('../models/order.js')
const { getListOrder, getOrderById, createOrder } = require('../services/orderService.js')

async function getOrder(req, res) {
    try {
        const data = await getListOrder()
        res.send(data)

    } catch (error) {
        res.status(404).json({ message: 'not found' })
    }


}
async function getOrderById(req, res) {

    try {
        const data = await getOrderById(req.params.id)
        res.send(json(data))
    } catch (error) {
        res.status(404).json({ message: 'not found' })

    }


}

async function createOrder(req, res) {
    const { customer,
        products, total } = req.body


    try {
        if (!customer || !Array.isArray(products) || products.length === 0) {
            res.send('Data request invalid')
        }
        const data = await createOrder(customer, products, total)
        res.send(data)

    } catch (error) {
        res.status(404).json({ message: 'Error to create sales invoice' })

    }



}

function deleteOrderById(req, res) {
    const id = req.params.id
    order.findByIdAndDelete(id)
        .then(data => {
            !data ? res.status(404).json({ message: 'not found' })
                : res.send('invoice deleted')
        })
}
module.exports = {
    getOrder,
    getOrderById,
    createOrder,
    deleteOrderById
}