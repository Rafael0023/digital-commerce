const customer = require('../models/customer.js');

const get = async () => {
    return await customer.find().populate({
      path: 'user',
      select: '-password'   
   });
};

const getById = (id) => {
    return customer.findById(id).populate({
      path: 'user',
      select: '-password'   
   });
};

const create = (user, address, dateOfBirth,phone, paymentMethods) => {
    const newCustomer = new customer({ user, address, dateOfBirth,phone, paymentMethods });

    if (!newCustomer) {
        throw new Error("Error to create");
    }
    return newCustomer.save();
};

const update = async (id, user, address, dateOfBirth, phone, paymentMethods) => {
    const customerUpdate = await customer.findById(id);
    
    if (!customerUpdate) {
        throw new Error('Customer not found');
    }

    if (typeof user !== 'undefined' && user !== null && user !== "") {
        customerUpdate.user = user;
    }

    if (Array.isArray(address) && address.length > 0) {
        customerUpdate.address = address;
    }

    if (dateOfBirth && dateOfBirth !== "La fecha no puede ser en el futuro" && dateOfBirth !== "La fecha de nacimiento es requerida")  {
        
        customerUpdate.dateOfBirth = dateOfBirth;
    }
    if(typeof phone !== 'undefined'&& phone!==null &&phone.trim()!== ""){
        customerUpdate.phone = phone;
    }

    if (Array.isArray(paymentMethods) && paymentMethods.length > 0) {
        customerUpdate.paymentMethods = paymentMethods;
    }

    return await customerUpdate.save();
};
const deleteById = (id)=>{
   return customer.findByIdAndDelete(id)
} 

module.exports = {
    get,
    getById,
    create,
    update,
    deleteById
};
