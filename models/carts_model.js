const ObjectID = require('mongodb').ObjectID;
var model = require('../models_schema/models_schema');
var CARTS_COLLECTION = model.carts;
const queueService  = require('../queueService');

var carts = {
     createCart:  async (data) => {
        
        let  cart = new CARTS_COLLECTION({
            'userId': data.userId,
            'isDelievered':0,
            'status': 1,
            'totalAmount':data.totalAmount,
            'isAssgined':0,
            'products':data.addToCart,
            'createdAt':new Date(),
            'updatedAt':new Date()
          });

        try {
            
            let data = await cart.save();
            console.log('resultdata',data);
            let queueData = {'order':1,'userId':data.userId};
            queueService.sendToQueue(queueData,'orderNotifications');
            return data;
        }catch(err){
            console.log(err);
            throw new Error(err);
        }
     
    },

    closeCart: async (cartId) => {

      let  query = {_id:new ObjectID(cartId)};
      let   updateQuery = {
           $set: {
                 'isDelievered':1,
               }
         };

       try{

           let data = await   CARTS_COLLECTION.find(query);
           if(data && data.length > 0) {
              data =   await CARTS_COLLECTION.update(query,updateQuery);
              return data;
           }else{
             return true;
           }
       } catch(err){
           console.log(err);
           throw new Error(err);
       }

      }
  };

  module.exports = carts;