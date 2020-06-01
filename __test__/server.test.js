'use strict';

const {server} = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
    it('should respond with 500', ()=> {
        
        return mockRequest.get('/bad')
            .then(results=> {
                expect(results.status).toBe(500);
            }).catch(console.error);
    });

    it('should respond 404 of an invalid route',() => {

        return mockRequest
            .get('/somerandometext')
            .then(results => {
                expect(results.status).toBe(404);
            }).catch(console.log);
    });

    it('should respond properly /categories', ()=> {
        return mockRequest
            .get('/categories?query=shoes')
            .then(results => {
                expect(results.status).toBe(200);
            })
    });
    it('should respond properly /products', ()=> {
        return mockRequest
            .get('/products?query=nikeshoes')
            .then(results => {
                expect(results.status).toBe(200);
            })
    });

    it('should post data to products', ()=> {
        return mockRequest
            .post('/products')
            .send({name: "super-sayin tshirt"})
            .then(results => {
                expect(results.status).toBe(200);
            })
    });
    it('should post data to products', ()=> {
        return mockRequest
            .post('/products')
            .send({name: "super-sayin tshirt"})
            .then(results => {
                expect(results.status).toBe(200);
            })
    });
    it('should post data to catagories', ()=> {
        return mockRequest
            .post('/categories')
            .send({name: "super-sayin tshirt"})
            .then(results => {
                expect(results.status).toBe(200);
            })
    });

});