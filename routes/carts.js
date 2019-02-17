const express = require('express');
const router = express.Router();
let json = {};
const CartsModel = require('../models/carts_model');


router.post('/createcart',async (req, res, next) => {

  let data = req.body;

  if(data.userId){
    if(data.addToCart){
       
      try {
        let result = await CartsModel.createCart(data);
        json = {'status':1,'result':result};
        res.send(json);
      } catch (error) {
        json = {'status':0,'error':error}
        res.send(json);
      }

    } else{
      json = {'status':0,'error':'cart is missing'};
      res.send(json);
    }
  } else{
    json = {'status':0,'error':'userId is misssing'};
    res.send(json);
  }
   
});


module.exports = router;