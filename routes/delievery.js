var express = require('express');
var router = express.Router();
const delievery = require('../models/delieveries_model');





router.post('/updatedelievery', async (req, res, next) => {

    let data = req.body;

    if(data.delieveryId && data.cartId) {

        try {
            let result = await delievery.updateDelievery(data);
            json = {'status':1,'result':result};
            res.send(json);
        } catch (err) {
            json = {'status':0,'error':err};
            res.send(json);
        }
 
    } else {
        json = {'status':0,'error':'All fields are mandatory'};
        res.send(json);
    }
   
});

module.exports = router;
