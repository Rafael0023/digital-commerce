const { get, getById, create, update, deleteById } = require('../services/userService.js')

async function getUser(req, res) {
    try {
        const data = await get();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
}
async function getUserById(req, res) {
    try {
        const data = await getById(req.params.id)
        !data ? res.status(404).json({ message: 'not found' }) :
            res.json(data)
    } catch (error) {
        res.status(404).json({ message: 'not found' })

    }

}
async function createUser(req, res) {
    const { email, password } = req.body
    if (!email || !password)
        return res.status(404).json({ message: 'data request invalid' })
    try {
        const data = await create(email, password)
        res.send(data)
    } catch (error) {
        res.status(404).json({ mesage: 'error to create user' })
    }


}
async function updateUser(req, res) {

    const { email, password } = req.body

    if (!email || !password) {
        return res.status(404).json({ message: 'data request invalid' })

    }

    try {
        const data = await update(req.params.id, email, password)

        if (!data) {
            return res.status(404).json({ message: 'not found' })
        }
        res.send(`user ${data} update`)
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