 const purchaseInvoice = require('../models/purchaseInvoice.js') 

 const getListpurchaseinvoice = () =>{
   return  purchaseInvoice.find()
 }
 const getById = (id)=>{
    
    return purchaseInvoice.findById(id)
     }
 const create = (newInvoice)=>{
  const  {supplier,
        products,
        total} = newInvoice  
        if (!supplier||!products||!total) throw new Error("data request invalid");
                
    const newPurchaseInvoice = purchaseInvoice({supplier,
        products,
        total}) 
       return newPurchaseInvoice.save()
 }
 const updateById  = (id,updateInvoice) => {
    const {supplier,
        products,
        total} = updateInvoice

   const data = purchaseInvoice.findByIdAndUpdate(id, {
        $set: {
            supplier,
            products,
            total
        }
    },
        { new: true })
        if(!data)throw new Error("purchase invoice not found");

        return data
 }      
 const deleteById = (id) =>{

    const data = purchaseInvoice.findByIdAndDelete(id) 
    if (!data)throw new Error("purchase invoice not found");
    
    return data
 }
 module.exports ={ 
    getListpurchaseinvoice,
    getById,
    create,
    updateById,
    deleteById 
}