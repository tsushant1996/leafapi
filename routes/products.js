const express = require('express');
const router = express.Router();
var json = {};
var model = require('../models_schema/models_schema');
var ProductsModel = require('../models/products_model');




router.post('/createproduct',async (req, res, next) => {
    let data = req.body;

    if(data.name && data.price && data.quantity){
        try { 
          let result = await ProductsModel.createProduct(data);
          json = {'status':1,'result':result};
          res.send(json);
        } catch (error) {
          
        }
    } else {
      json = {'status':0,'error':'All fields are mandatory'};
      res.send(json);
    }
});




router.post('/updateproduct', async (req, res, next) => {

  let data = req.body;

  if(data.productId) {

      try {
          let result = await ProductsModel.updateProduct(data);
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

router.post('/getproduct', async (req, res, next) => {
  

      try {
          let result = await ProductsModel.getProduct(req.body);
          json = {'status':1,'result':result};
          res.send(json);
      } catch (err) {
          json = {'status':0,'error':err};
          res.send(json);
      }
 
});


router.post('/deleteproduct', async (req, res, next) => {
  
  if(data.ProductId) {
      try {
          let result = await ProductsModel.deleteProduct(req.body);
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
