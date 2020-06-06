'use strict';
const supergoose = require('@code-fellows/supergoose');

const categories = require('../lib/models/categories/categories.collection');
const products = require('../lib/models/products/products.collection');


let testcatagoryObj = {name: 'test-apples', displayname: 'sadsad', description: 'FRUIT'};
let testproductObj = {name: 'test-apples', displayname:'asdasd',description: 'FRUIT',  categorie:'asdasd'};


describe('category and product Models', () =>{
  it('can post() a catagory', ()=> {
    return categories.create(testcatagoryObj )
      .then(record => {
        Object.keys(testcatagoryObj ).forEach(key=> {
          expect(record[key]).toEqual(testcatagoryObj [key]);
        });
      });
  });
  it('can post() a product', ()=> {
    return products.create(testproductObj)
      .then(record => {
        Object.keys(testproductObj ).forEach(key=> {
          expect(record[key]).toEqual(testproductObj [key]);
        });
      });
  });
  it('can get() category', ()=> {
    return categories.read()
      .then(results => {
        Object.keys(testcatagoryObj).forEach(key=> {
          expect(results[0][key]).toEqual(testcatagoryObj[key]);
        });
      });
  });
  it('can get() product', ()=> {
    return products.read()
      .then(results => {
        Object.keys(testproductObj).forEach(key=> {
          expect(results[0][key]).toEqual(testproductObj[key]);
        });
      });
  });
  it('can delete() catagory', ()=> {
    let id='5ed66d3eade6f2275c886a86';
    return categories.delete(id)
      .then(data => {
        expect(data).toBeNull();
      });
  });
  it('can delete() product', ()=> {
    let id='5ed66d3eade6f2275c886a86';
    return products.delete(id)
      .then(data => {
        expect(data).toBeNull();
      });
  });
});
