var model = require('../models_schema/models_schema');
const ObjectID = require('mongodb').ObjectID;
var PRODUCTS_COLLECTION = model.products;

var products = {
     createProduct:  async (data) => {
        
        let  product = new PRODUCTS_COLLECTION({
            'name': data.name,
            'price':data.price,
            'quantity': data.quantity,
            'productImageUrl':data.productImageUrl,
            'category':data.category,
            'createdAt':new Date(),
            'updatedAt':new Date()
          });

        try {
            
            let data = await product.save();
            console.log('resultdata',data);
            return data;
        }catch(err){
            console.log(err);
            throw new Error(err);
        }
     
    },

    updateProduct: async (data) => {

       let  query = {_id:new ObjectID(data.productId)};
       let   updateQuery = {
            $set: {
                'name': data.name,
                'price':data.price,
                'quantity': data.quantity,
                'productImageUrl':data.productImageUrl,
                'category':data.category,
                'updatedAt':new Date()
                }
          };

        try{

            let data = await PRODUCTS_COLLECTION.find(query);
            if(data && data.length > 0) {
               data =   await PRODUCTS_COLLECTION.update(query,updateQuery);
               return data;
            }
        } catch(err){
            console.log(err);
            throw new Error(err);
        }

    },

    getProduct: async (data) => {

       let  query = data;
 
         try{
 
             let data = await PRODUCTS_COLLECTION.find(query);
             if(data && data.length > 0) {
                return data;
             }
         } catch(err){
             console.log(err);
             throw new Error(err);
         }
 
     },

     deleteProduct: async (data) => {
        
        let  query = {_id:new ObjectID(data.userId)};
  
        try{

            let data = await PRODUCTS_COLLECTION.find(query);
            if(data && data.length > 0) {
               data =   await PRODUCTS_COLLECTION.deleteOne(query);
               console.log('dataDelete');
               return data;
            }else{
                throw new Error('Data not Found');
            }
        } catch(err){
            console.log("---------------->",err);
            throw new Error(err);
        }
  
      }


  
  
  };

  module.exports = products;