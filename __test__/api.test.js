'use strict';

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../lib/server');
const mockRequest = supergoose(server);

describe(' API test', ()=> {

  it('it can get() product ', ()=> {
    let obj = {'name': 'test-post-2', 'displayname':'test2','description':'asdad', 'categorie':'asdsa'};
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(data => {
        return mockRequest.get('/api/v1/products')
          .then(result => {

            // console.log('result',result.body);
            Object.keys(obj).forEach(key=> {
              console.log('testtttttttttt',result.body.result);

              expect(result.body.result[0][key]).toEqual(obj[key]);
              
            });
          });
      });
  });

  it('can post() a new catagory ', ()=> {
    let obj = {name: 'test-post-2', displayname:'test2',description:'asdad'};
    return mockRequest
      .post('/api/v1/catagories')
      .send(obj)
      .then(data => {
        // compare what the post has returned with hwat we submitted
        // console.log(data.body);
        expect(data.status).toBe(200);
        console.log('object',obj);
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
        expect(data.status).toBe(200);
        Object.keys(obj).forEach(key => {
          expect(data.body[key]).toEqual(obj[key]);
        });
      });
  });


  it('it can delete() catagory ', ()=> {
    let obj = {name: 'test-post-2', displayname:'test2',description:'asdad'};
    let id='5ed66d3eade6f2275c886a86';
    return mockRequest
      .post('/api/v1/catagories')
      .send(obj)
      .then(data => {
        return mockRequest.delete(`/api/v1/catagories/${id}`)
          .then(data => {
            expect(data.status).toBe(200);

          });
      });
  });
  it('it can delete() product ', ()=> {
    let obj = {name: 'test-post-2', displayname:'test2',description:'asdad', categorie:'asdsa'};
    let id='5ed66da2ade6f2275c886a87';
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(data => {
        console.log('alaaaaaaaaaaaaaaaaaa',obj);
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