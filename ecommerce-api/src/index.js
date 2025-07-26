const express = require('express')
const mongoose = require('mongoose')
const { routersCustomers } = require('./routers/customerRouters.js')
const {routersProducts} = require('./routers/productRouters.js' )
const app = express()
const PORT = 3000

require('dotenv').config();
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connection successful"))
    .catch((error) => console.log(error));

app.use('/api/customers', routersCustomers)
app.use('/api/products',routersProducts)



app.get('/', (req, res) => {
    res.send('api ecommerce ')
})






app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT} ...`)


})