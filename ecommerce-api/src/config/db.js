const mongoose = require('mongoose')
require('dotenv').config();
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connection successful"))
    .catch((error) => console.log(error));
