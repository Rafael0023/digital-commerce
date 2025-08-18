const customer = require('../models/customer.js');
const { get, getById, create, update, deleteById } = require('../services/customerService.js');
const { validateDate } = require('../middleware/validation.js');

async function getCustomers(req, res) {
    const data = await get();
    res.send(JSON.stringify(data))

}
async function getCustomersById(req, res) {
    try {
        const data = await getById(req.params.id)

        if (!data) {
            res.status(404).json({ message: 'not found' })
        }
        res.send(JSON.stringify(data))
    } catch (error) {
        res.status(404).json({ message: 'not found' })
    }

}
async function createCustomers(req, res) {

    const { user, address, dateOfBirth,phone, paymentMethods } = req.body
    try {
        const date = validateDate(dateOfBirth)

        if (!user) {
            return res.status(404).json({ message: 'data request invalid' })
        }
        const data = await create(user, address, date, phone, paymentMethods)
        res.send(JSON.stringify(data))
    } catch (error) {
        return res.status(404).json({ message: 'Error to create' })
    }



}

async function updateCustomersById(req, res) {

    try {
        const id = req.params.id
        const { user, address, dateOfBirth, phone, paymentMethods } = req.body
        const date = validateDate(dateOfBirth)
        const data = await update(id, user, address, date, phone, paymentMethods)

        if (!data) {
            res.status(404).json({ message: 'Error to Update' })
        }
        res.send(JSON.stringify(data))
    }
    catch (error) {
        res.status(505).json({ message: error.message })
    }


}

async function deleteCustomersById(req, res) {
    try {
        const data = await deleteById(req.params.id)
        if (!data) {
            res.status(404).json({ message: 'Delete unsuccessful' })
        }
        res.send(JSON.stringify(data))
    } catch (error) {
        res.status(404).json({ message: 'Delete unsuccessful' })
    }

}

module.exports = {
    getCustomers,
    getCustomersById,
    createCustomers,
    updateCustomersById,
    deleteCustomersById
}