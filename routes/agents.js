var express = require('express');
var router = express.Router();
const AgentsModel = require('../models/agents_model');





router.post('/createagent', async (req, res, next) => {

    let data = req.body;

    if(data.name && data.email) {

        try {
            let result = await AgentsModel.createAgent(data);
            json = {'status':1,'result':result};
            res.send(json);
        } catch (err) {
            json = {'status':0,'error':err};
        }
 
    } else {
        json = {'status':0,'error':'All fields are mandatory'};
        res.send(json);
    }
   
});

router.post('/updateagent', async (req, res, next) => {

    let data = req.body;

    if(data.agentId) {

        try {
            let result = await AgentsModel.updateAgent(data);
            json = {'status':1,'result':result};
            res.send(json);
        } catch (err) {
            json = {'status':0,'error':err};
        }
 
    } else {
        json = {'status':0,'error':'All fields are mandatory'};
        res.send(json);
    }
   
});

router.post('/getagent', async (req, res, next) => {
    

        try {
            let result = await AgentsModel.getAgent(req.body);
            json = {'status':1,'result':result};
            res.send(json);
        } catch (err) {
            json = {'status':0,'error':err};
            res.send(json);
        }
   
});


router.post('/deleteagent', async (req, res, next) => {
    
    if(data.agentId) {
        try {
            let result = await AgentsModel.deleteAgent(req.body);
            json = {'status':1,'result':result};
            res.send(json);
        } catch (err) {
            json = {'status':0,'error':'Data not Found'};
            res.send(json);
        }

    } else {
        json = {'status':0,'error':'Data not Found'};
        res.send(json);
    }
    

});

module.exports = router;
