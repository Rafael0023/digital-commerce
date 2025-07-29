const express = require('express')
const mongoose = require('mongoose')
const { routersCustomers } = require('./routers/customerRouters.js')
const { routersProducts } = require('./routers/productRouters.js')
const { routersInvoice } = require('./routers/invoiceRouters.js')
const { routersUser } = require('./routers/userRouters.js')
const inventory = require('./modules/inventory.js')

const app = express()
const PORT = 3000
require('dotenv').config();
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connection successful"))
    .catch((error) => console.log(error));


app.use('/api/invoice', routersInvoice)
app.use('/api/customers', routersCustomers)
app.use('/api/products', routersProducts)
app.use('/api/users', routersUser)



app.get('/api/inventory', (req, res) => {
    inventory.find().then(data => res.send(JSON.stringify(data)))
});

app.get('/api/inventory/:id', (req, res) => {
    const id = req.params.id

    inventory.findById(id).then(data =>
        !data ? res.status(404).json({ message: 'inventory not found' })
            : res.send(JSON.stringify(data)))
});



app.put('/api/inventory/:id', express.json(), (req, res )=> {
    const id = req.params.id
    const { product, type, quantity, reference } = req.body

    inventory.findByIdAndUpdate(id, {
        $set: {
            product, quantity, type, reference
        }
    }).then(data => {
        !data ? res.status(404).json({ message: 'not found' })
            : res.send('inventory update')
    })

});

app.post('/api/inventory/',express.json(), (req, res) => {
 const{ product,  quantity,type, reference} = req.body
 
    
        
    const newInventory = new inventory({product, quantity, type, reference})
    
    newInventory.save().then( res.send('inventario creado') )
    
});



app.get('/', (req, res) => {
    res.send('api ecommerce ')
})


app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT} ...`)

})