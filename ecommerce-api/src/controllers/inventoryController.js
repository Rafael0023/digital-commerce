const { getListInventory, getById, create, updateById, deleteById } = require('../services/inventoryService.js')

async function getInventory(req, res) {
    try {
        const data = await getListInventory()
        res.json(data)
    } catch (error) {
        res.status(404).json({ message: 'inventory not found' })
    }

}
async function getInventoryById(req, res) {
    const id = req.params.id
    try {
        const data = await getById(id)
        if (!data) {
            return res.status(404).json({ message: 'inventory not found' })
        }
        res.send(JSON.stringify(data))
    } catch (error) {
        res.status(404).json({ message: 'inventory not found' })
    }
}
async function createInventory(req, res) {

    const { products, type, reference } = req.body
   
    if ( !Array.isArray(products) || !type || !reference) {
        return res.status(404).json({ message: 'data request invalid' })
    }
    try {
        const data = await create(products,  type, reference)
        if (!data) {
            res.status(404).json({ message: 'created failed' })
        } res.send('inventario created')
    } catch (error) {
        res.status(404).json({ message: 'created failed' })
    }

}
async function updateInventoryById(req, res) {
    const id = req.params.id
    const { products, type, reference } = req.body
    if (!products || !type || !reference || !id) {
        return res.status(404).json({ message: 'data request invalid' })
    }
    try {
        const data = await updateById(id, products, type, reference)
        if (!data) { return res.status(404).json({ message: 'not found' }) }
        res.send(`inventory update ${data}`)
    } catch (error) {
        res.status(404).json({ message: 'not found' })
    }



}
async function deleteInventoryById(req, res) {
    const id = req.params.id
    if (!id) {
        res.status(404).json({ message: 'id invalid' })
    }
    try {
        const data = await deleteById(id)
        if (!data) {
            res.status(404).json({ message: 'not found' })
        }
        res.send('inventory deleted')

    } catch (error) {
        res.status(404).json({ message: 'not found' })
    }

}
module.exports = {
    getInventory,
    getInventoryById,
    createInventory,
    updateInventoryById,
    deleteInventoryById

}