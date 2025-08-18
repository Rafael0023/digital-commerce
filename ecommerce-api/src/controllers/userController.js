const { get, getById, create, update, deleteById } = require('../services/userService.js')

async function getUser(req, res) {
    try {
        const data = await get();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error getting users' });
    }
}
async function getUserById(req, res) {
    try {
        const data = await getById(req.params.id)
        !data ? res.status(404).json({ message: 'User not found' }) :
            res.json(data)
    } catch (error) {
        res.status(404).json({ message: 'not found' })

    }

}
async function createUser(req, res) {
    const { name, lastname, email, password, rol, state } = req.body
    if (!name || !lastname || !email || !password)
        return res.status(404).json({ message: 'data request invalid' })
    try {
        const data = await create(name, lastname, email, password, rol, state)
        res.send(data)
    } catch (error) {
        res.status(404).json({ mesage: 'error to create user' })
    }


}
async function updateUser(req, res) {

    const { name, lastname, email, password, rol, state } = req.body

    try {
        const data = await update(req.params.id, name, lastname, email, password, rol, state)

        if (!data) {
            return res.status(404).json({ message: 'not found' })
        }
        res.send(`user ${data} `)
    } catch (error) {
        res.status(404).json({ message: 'error to update' })
    }


}
async function deleteUser(req, res) {
    try {
        const data = await deleteById(req.params.id)

        if (!data) {
            return res.status(404).json({ message: 'user not found' })

        } res.send('user deleted')
    } catch (error) {
        res.status(404).json({ message: 'user not found' })
    }



}


module.exports = {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}