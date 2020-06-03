const express = require('express');
const router = express.Router();
const catagories = require('../lib/models/categories/categories.model');
const products = require('../lib/models/products/products.model');
function getModel(req, res, next) {
  let model = req.params.model; 
  switch(model) {
  case 'products':
    req.model = products;
    next();
    return;
  case 'catagories':
    req.model = catagories;
    next();
    return;
  default:
    next('Invalid Model entry');
    return;
  }
}
router.param('model', getModel);

router.get(':model', GetAllproducts);
router.get(':model/:id',GetOneproduct);
router.post(':model', Postproduct );
router.put(':model/:id',updateproduct);
router.delete(':model/:id',deleteproduct);


function  GetAllproducts(req, res, next) {
  req.model.read()
    .then(result => {
      let count = result.length;
      res.json({count, result});
    }).catch(next);
}

function GetOneproduct(req, res, next) {
  let id = req.params.id;
  req.model
    .read(id)
    .then(result => res.json(result))
    .catch(next);
}

function Postproduct(req, res, next) {
  let id = req.params.id;
  req.model
    .create(req.body)
    .then(record => res.json(record))
    .catch(next);
}
function updateproduct(req, res, next) {
  let id = req.params.id;
  req.model
    .update(id,req.body)
    .then(record => res.json(record))
    .catch(next);
} 
function deleteproduct(req, res, next) {
  let id=req.params.id;
  req.model
    .delete(id)
    .then(record=>res.status(200).json(record))
    .catch(next);
}

module.exports = router;