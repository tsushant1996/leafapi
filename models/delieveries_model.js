var model = require('../models_schema/models_schema');
const ObjectID = require('mongodb').ObjectID;
var DELIEVERY_COLLECTION = model.delieveries;
const agents = require('../models/agents_model');
const carts = require('../models/carts_model');

var delieveries = {
    

    updateDelievery: async (data) => {

       let  query = {_id:new ObjectID(data.delieveryId)};
       let   updateQuery = {
            $set: {
                  'status':1,
                  'delieveredTimeline':new Date(),
                  'updatedAt':new Date()
                }
          };

        try{

            let delieveryData = await DELIEVERY_COLLECTION.find(query);
            if(delieveryData && delieveryData.length > 0) {
                await DELIEVERY_COLLECTION.update(query,updateQuery);
                await agents.freeAgent(delieveryData[0].agentId);
                await carts.closeCart(delieveryData[0].cartId);
                return data;
            }
        } catch(err){
            console.log(err);
            throw new Error(err);
        }

    },

   
  
  };

  module.exports = delieveries;