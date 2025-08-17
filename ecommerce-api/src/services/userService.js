const user = require('../models/user')

const get = () => {
    return user.find()
}
const getById = (id) => {
    return user.findById(id)
}
const create = (name, lastname, email, password, rol, state) => {
    const newUser = new user({ name, lastname, email, password, rol, state })
    return newUser.save()
}
const update = (id, name, lastname, email, password, rol, state) => {

    return user.findByIdAndUpdate(id, { $set: { name, lastname, email, password, rol, state } }, {
        runValidators: true,
        new: true
    })
}
const deleteById = (id)=>{
    return user.findByIdAndDelete(id)
} 
module.exports = {
    get,
    getById,
    create,
    update,
    deleteById
}