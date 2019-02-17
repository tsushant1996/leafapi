var model = require('../models_schema/models_schema');
const ObjectID = require('mongodb').ObjectID;
var AGENTS_COLLECTION = model.agents;
const queueService = require('../queueService');

var agents = {
     createAgent:  async (data) => {
        
        let  agent = new AGENTS_COLLECTION({
            'name': data.name,
            'email':data.email,
            'isFree': 1,
            'latitude':'',
            'longitude':'',
            'createdAt':new Date(),
            'updatedAt':new Date()
          });

        try {
            
            let data = await agent.save();
            console.log('resultdata',data);
            return data;
        }catch(err){
            console.log(err);
            throw new Error(err);
        }
     
    },

    updateAgent: async (data) => {

       let  query = {_id:new ObjectID(data.agentId)};
       let   updateQuery = {
            $set: {
                  'name':data.name ? data.name:'',
                  'email':data.email ? data.email :'',
                  'isFree':data.data.isFree ?data.isFree:0,
                  'updatedAt':new Date()
                }
          };

        try{

            let data = await AGENTS_COLLECTION.find(query);
            if(data && data.length > 0) {
               data =   await AGENTS_COLLECTION.update(query,updateQuery);
               return data;
            }
        } catch(err){
            console.log(err);
            throw new Error(err);
        }

    },

    getAgent: async (data) => {

       let  query = data;
 
         try{
 
             let data = await AGENTS_COLLECTION.find(query);
             if(data && data.length > 0) {
                return data;
             }
         } catch(err){
             console.log(err);
             throw new Error(err);
         }
 
     },

     deleteAgent: async (data) => {
        
        let  query = {_id:new ObjectID(data.agentId)};
  
        try{

            let data = await AGENTS_COLLECTION.find(query);
            if(data && data.length > 0) {
               data =   await AGENTS_COLLECTION.deleteOne(query);
               console.log('dataDelete');
               return data;
            }else{
                throw new Error('Data not Found');
            }
        } catch(err){
            console.log("---------------->",err);
            throw new Error(err);
        }
  
      },


    freeAgent: async (agentId) => {

        let  query = {_id:new ObjectID(agentId)};
        let   updateQuery = {
             $set: {
                   'isFree':1,
                 }
           };
 
         try{
 
             let data = await AGENTS_COLLECTION.find(query);
             if(data && data.length > 0) {
                data =   await AGENTS_COLLECTION.update(query,updateQuery);
                return data;
             }
         } catch(err){
             console.log(err);
             throw new Error(err);
         }
 
     },


     updateAgentLocation: async (data) => {

        let  query = {_id:new ObjectID(data.agentId)};
        let   updateQuery = {
             $set: {
                   'latitude':data.latitude,
                   'longitude':data.longitude
                 }
           };
 
         try{
 
             let data = await AGENTS_COLLECTION.find(query);
             if(data && data.length > 0) {
                data =   await AGENTS_COLLECTION.update(query,updateQuery);
                return data;
             }
         } catch(err){
             console.log(err);
             throw new Error(err);
         }
 
     },




  
  
  };

  module.exports = agents;