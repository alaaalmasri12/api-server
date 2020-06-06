'use strict';

const express = require('express');
const router = express.Router();
const product = require('../lib/models/products/products.collection');

router.get('/products', getproduct);
router.get('/products/:id',getproductbyid);

router.post('/products', postproduct);
router.put('/products/:id',updateproduct);
router.delete('/products/:id', deleteproduct);
function getproduct(req, res, next) {
  product.read()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function getproductbyid(req, res, next) {
  product.read(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}
function postproduct(req,res, next ) {
  
  let {name ,displayname,description,categorie}=req.body;
  let record={name,displayname,description,categorie};
  product.create(record)
    .then(data => {
      res.status(201).json(data); 
    }).catch(next);
}
function updateproduct(req,res, next ) {
  let {name ,displayname,description,categorie}=req.body;
  let record={name,displayname,description,categorie};
  product.update(req.params.id,record)
    .then(data => {
      res.status(200).json(data); 
    }).catch(next);
}

function deleteproduct(req,res, next) {
  product.delete(req.params.id)
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}
module.exports=router;