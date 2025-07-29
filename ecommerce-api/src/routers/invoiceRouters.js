const invoice = require('../modules/invoice.js')
const express = require('express')

const routersInvoice = express.Router()

routersInvoice.get('/', (req, res) => {
    invoice.find().then(data => res.send(JSON.stringify(data)))
})
routersInvoice.get('/:id', express.json(), (req, res) => {
    const id = req.params.id
    invoice.findById(id).then(data => {
        !data ? res.send('invoice not found') :
            res.send(JSON.stringify(data))
    })
})
routersInvoice.post('/',express.json(), (req, res) => {
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
})
routersInvoice.delete('/:id',(req, res)=>{
        const id = req.params.id
        invoice.findByIdAndDelete(id)
        .then(data =>{
          !data? res.status(404).json({message:'not found'})
          :res.send('invoice deleted') 
        })
})

module.exports = {
    routersInvoice
}
       
            

