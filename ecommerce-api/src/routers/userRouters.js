const express = require('express')
const{getUser,getUserById,createUser,updateUser,deleteUser} = require('../controllers/userController') 
const routersUser = express.Router()

routersUser.get('/',getUser)
           .get('/:id',getUserById)
           .post('/',express.json(),createUser)
           .patch('/:id',express.json(),updateUser) 
           .delete('/:id', deleteUser)
module.exports = {
    routersUser
}