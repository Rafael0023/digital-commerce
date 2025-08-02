const purchaseInvoice = require('../models/purchaseInvoice')
const { getListpurchaseinvoice, create, getById, updateById, deleteById } = require('../services/purchaseInvoiceService')

async function getPurchaseInvoice(req, res) {
    try {
        const data = await getListpurchaseinvoice()
        res.json(data)
    } catch (error) {
        res.status(404).json({ message: 'invoice not found' })
    }

}
async function getPurchaseInvoiceById(req, res) {
    try {
        const data = await getById(req.params.id)
        res.json(data)

    } catch (error) {
        res.status(404).json({ message: 'invoice not found' })
    }

}
async function createPurchaseInvoice(req, res) {
    const invoice = req.body
    try {
        const data = await create(invoice)
        res.send('purchase invoice created')
    } catch (error) {
        res.status(404).json({ message: 'invoice not created' })
    }
}
async function updatePurchaseInvoiceById(req, res) {
    const updateInvoice = req.body
    try {
        const data = await updateById(req.param.id, updateInvoice)
        res.json(`purchase invoice actualizada ${data}`)
    } catch (error) {
        res.status(404).json({ message: 'purchase invoice not update' })

    }

}

function deletePurchaseInvoice(req, res) {
    const id = req.params.id
        try {
            deleteById( req.params.id)
            res.send('purchase invoice delete')
        } catch (error) {
            res.status(404).json({message:'not found'})
        }
    }
        
module.exports = {
    getPurchaseInvoice,
    getPurchaseInvoiceById,
    createPurchaseInvoice,
    updatePurchaseInvoiceById,
    deletePurchaseInvoice
}