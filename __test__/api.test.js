'use strict';

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../lib/server');
const mockRequest = supergoose(server);

describe(' API test', ()=> {

  it('it can get() product ', ()=> {
    let obj = {name: 'test-post-2', displayname:'test2',description:'asdad', categorie:'asdsa'};
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(data => {
        return mockRequest.get('/api/v1/products')
          .then(result => {
            Object.keys(obj).forEach(key=> {
              expect(result.body[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can post() a new catagory ', ()=> {
    let obj = {name: 'test-post-2', displayname:'test2',description:'asdad'};
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then(data => {
        expect(data.status).toBe(201);
        Object.keys(obj).forEach(key => {
          expect(data.body[key]).toEqual(obj[key]);
        });
      });
  });
  it('can post() a new product ', ()=> {
    let obj = {name: 'test-post-2', displayname:'test2',description:'asdad', categorie:'asdsa'};
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(data => {
        expect(data.status).toBe(201);
        Object.keys(obj).forEach(key => {
          expect(data.body[key]).toEqual(obj[key]);
        });
      });
  });


  it('it can delete() catagory ', ()=> {
    let obj = {name: 'test-post-2', displayname:'test2',description:'asdad'};
    let id='5ed66d3eade6f2275c886a86';
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then(data => {
        return mockRequest.delete(`/api/v1/categories/${id}`)
          .then(data => {
            expect(data.status).toBe(200);

          });
      });
  });
  it('it can delete() product ', ()=> {
    let obj = {name: 'test-post-2', displayname:'test2',description:'asdad', categorie:'asdsa'};
    let id='5ed66d3eade6f2275c886a86';
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(data => {
        return mockRequest.delete(`/api/v1/products/${id}`)
          .then(data => {
            expect(data.status).toBe(200);
            
          });
      });
  });
        
  it('TEST post() failure ', ()=> {
    let obj = {name: 'test-post-1'};
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then(data => {
                      
        expect(data.status).toBe(500);
      });
  });

  it('TEST post() failure ', ()=> {
    let obj = {name: 'test-post-1'};
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(data => {
                     
        expect(data.status).toBe(500);
      });
  });
});