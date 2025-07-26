const express = require('express')
const mongoose = require('mongoose')
const {routersCustomers} = require('./routers/customerRouters.js')



const app = express()
const PORT = 3000



app.use('/api/customers', routersCustomers)
require('dotenv').config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connection successful"))
    .catch((error) => console.log(error));


app.get('/', (req, res) => {

    res.send('api ecommerce ')


})

app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT} ...`)


})