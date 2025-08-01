const purchaseInvoice = require('../models/purchaseInvoice')

async function getPurchaseInvoice(req, res){

purchaseInvoice.find().then(data => res.json(data))

 
}
module.exports = {
    getPurchaseInvoice
}