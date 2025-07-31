const customer = require('../models/customer.js') 

function getCustomers (req, res) {

    customer.find().then(data => res.send(JSON.stringify(data)))

}
function getCustomersById (req, res)  {

    const id = req.params.id

    customer.findById(id).then(data => {
        !data ? res.status(404).json({ message: 'error' })
            : res.send(JSON.stringify(data))
    })
}
function createCustomersById (req, res) {
    const {
        name,
        lastname,
        email,
        address: {
            street,
            city,
            state,
            zipCode,
            country },
        phone,
        personalId } = req.body

    const customers = new customer({
        name,
        lastname,
        email,
        address: {
            street,
            city,
            state,
            zipCode,
            country
        },
        phone,
        personalId
    })
    
    customers.save()
    res.send(JSON.stringify('usuario guardado correctamente'))
}

 async function updateCustomersById (req, res)  {
    const id = req.params.id
    const {
        name,
        lastname,
        email,
        address: {
            street,
            city,
            state,
            zipCode,
            country },
        phone,
        personalId } = req.body
    try {

        const customerUpdate = await customer.findByIdAndUpdate(id,
            {
                $set:
                {
                    name,
                    lastname,
                    email,
                    address: {
                        street,
                        city,
                        state,
                        zipCode,
                        country
                    },
                    phone,
                    personalId
                }
            },
            { new: true });
        !customerUpdate ?
            res.status(404).json({ message: 'error not Update' })
            : res.send(JSON.stringify(customerUpdate))

    }
    catch (error) {
        res.status(505).json({ message: error.message })
    }


}

function deleteCustomersById (req, res)  {
    const id = req.params.id
    customer.findByIdAndDelete(id).then(data=>{
        !data ? res.status(404).json({message:'error customer not found'})
        :res.send(JSON.stringify(`customer delete ${data}`))
                  
    })

}

module.exports = {
    getCustomers,
    getCustomersById,
    createCustomersById,
    updateCustomersById,
    deleteCustomersById
}