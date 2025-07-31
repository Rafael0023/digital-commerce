const invoice = require('../models/invoice.js')

function getInvoice (req, res)  {
    invoice.find().then(data => res.send(JSON.stringify(data)))
}
function getInvoiceById (req, res)  {
    const id = req.params.id
    invoice.findById(id).then(data => {
        !data ? res.send('invoice not found') :
            res.send(JSON.stringify(data))
    })
}

function createInvoice(req, res)  {
    const { customer,
        products,total } = req.body

    !customer || !Array.isArray(products) || products.length === 0
        ? res.status(404).json({ message: 'invalid request data' }) :
        res

    const newInvoice = new invoice({customer, products,total})


   newInvoice.save()
    .then(()=> {
        res.send('invoice create\n'+JSON.stringify(newInvoice))

    }).catch((error) => {
        console.log(error)
        res.status(500).json({ message: 'failed create invoice' })
    })
}

function deleteInvoiceById(req, res){
        const id = req.params.id
        invoice.findByIdAndDelete(id)
        .then(data =>{
          !data? res.status(404).json({message:'not found'})
          :res.send('invoice deleted') 
        })
}
module.exports = {
    getInvoice,
    getInvoiceById,
    createInvoice,
    deleteInvoiceById
}