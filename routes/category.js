const express = require('express');
const router = express.Router();
//var MongoClient = require('mongodb').MongoClient;
var json = {};
var model = require('../models_schema/models_schema');
var CATEGORY_COLLECTION = model.categories;


router.get('/getAllCategory', function(req, res, next) {
    var query = {};
    var  totalRecords = 0;
  
    CATEGORY_COLLECTION.count(query, function(err, counts){
      totalRecords = counts;
        CATEGORY_COLLECTION.find(query, function(categoryerror, categories){
          if (categoryerror || categories.length <= 0) {
            json.status = '0';
            json.result = { 'message': 'categories not found!' };
            res.send(json);
          } else {
            json.status = '1';
            json.result = { 'message': 'categories found successfully.', 'categories': categories, 'totalRecords': totalRecords };
            res.send(json);
          }
      });
    });
  });

module.exports = router;