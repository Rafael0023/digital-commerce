const user = require('../models/user')

const get = () => {
    return user.find()
}
const getById = (id) => {
    return user.findById(id)
}
const create = (email, password) => {
    const newUser = new user({ email, password })
    return newUser.save()
}
const update = (id, email, password) => {

    return user.findByIdAndUpdate(id, { $set: { email, password } }, {
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