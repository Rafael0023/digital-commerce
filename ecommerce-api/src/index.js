const express = require('express')
require ('./config/db.js')
const { routersCustomers } = require('./routers/customerRouters.js')
const { routersProducts } = require('./routers/productRouters.js')
const { routersInvoice } = require('./routers/invoiceRouters.js')
const { routersUser } = require('./routers/userRouters.js')
const { routersInventory } = require('./routers/inventoryRouters.js')

const app = express()
const PORT = 3000


app.use('/api/invoice', routersInvoice)
app.use('/api/customers', routersCustomers)
app.use('/api/products', routersProducts)
app.use('/api/users', routersUser)
app.use('/api/inventory', routersInventory)
app.get('/', (req, res) => {
    res.send('api ecommerce ')
})


app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT} ...`)

})