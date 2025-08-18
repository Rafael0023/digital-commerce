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
const update = async function (id, name, lastname, email, password, rol, state) {

    const userUpdate = await user.findById(id)

    if (!userUpdate) {
        return "not found";
    }

    if (typeof name !== "undefined") {
        userUpdate.name = name;
    }
    if (typeof lastname !== "undefined") {
        userUpdate.lastname = lastname;
    }
    if (typeof email !== "undefined") {
        userUpdate.email = email;
    }
    if (password && password.trim() !== "") {
        userUpdate.password = password;
    }
    if (typeof rol !== "undefined") {
        userUpdate.rol = rol;
    }

    if (typeof state !== "undefined") {

        userUpdate.state = state;
    }

    return userUpdate.save();
}
const deleteById = (id) => {
    return user.findByIdAndDelete(id)
}
module.exports = {
    get,
    getById,
    create,
    update,
    deleteById
}