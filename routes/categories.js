'use strict';
const express = require('express');
const router = express.Router();
const catagory = require('../lib/models/categories/categories.collection');

router.get('/categories', getcategorie);
router.get('/categories/:id', getcategoriebyid);

router.post('/categories', postcategorie);
router.put('/categories/:id',updatecategorie);
router.delete('/categories/:id', deletecategorie);
function getcategorie(req, res, next) {
  catagory.read()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}
function getcategoriebyid(req, res, next) {
  catagory.read(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function postcategorie(req,res, next ) {
  let {name ,displayname,description}=req.body;
  let record={name,displayname,description};
  catagory.create(record)
    .then(data => {
      res.status(201).json(data); 
    }).catch(next);
}
function updatecategorie(req,res, next ) {
  let {name ,displayname,description}=req.body;
  let record={name,displayname,description};
  catagory.update(req.params.id,record)
    .then(data => {
      res.status(200).json(data); 
    }).catch(next);
}

function deletecategorie(req,res, next) {
  catagory.delete(req.params.id)
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}
module.exports=router;