const express = require('express')
const user = require('../modules/user')
const routersUser = express.Router()

routersUser.get('/',(req, res)=>{
    user.find().then(data=>{
        res.send(data)
    })
})
routersUser.get('/:id',(req, res)=>{
    const id = req.params.id 
    user.findById(id).then(data=>{
        !data?res.status(404).json({message:'user not found'})
        :res.send(data)
    })
})
routersUser.post('/',express.json(),(req,res)=>{
    const{email, password} = req.body
    
    !email||!password?res.status(404).json({message: 'data request invalid' })
    :res.status(200)

    const newUser = new user({email,password})

    newUser.save().then(res.send(`user created ${newUser}`).catch(error =>{
        console.log(error)
        res.status(500).json({message: 'fail create '})
    }))
})
routersUser.put('/:id',express.json(),async (req, res)=>{
    const id = req.params.id
    const{email, password } = req.body
    await user.findByIdAndUpdate(id,{$set:{email,password}}).then(data => {
        !data?res.status(404).send({message:'user not found'})
        :res.send(JSON.stringify('user update')) 

    })
    }) 

routersUser.delete('/:id', (req, res)=>{
    const id = req.params.id
    user.findByIdAndDelete(id).then(data => {
        !data?res.status(404).json({message:'user not found'}):
        res.send('user deleted')
    })  
      
})
module.exports = {
    routersUser
}