'use strict';
module.exports = () => {
    const data = { users: ['alaa'] }
    // Create 1000 users
    for (let i = 0; i < 1000; i++) {
      data.users.push({ id: i, name: `user${i}` })
    }
    return data
  }
  const jsonServer = require('json-server')
  const server = jsonServer.create()
  const router = jsonServer.router('db.json')
  const middlewares = jsonServer.defaults()
  var products=router.db.__wrapped__.products;
var catagories=router.db.__wrapped__.categories;


  function count()
  {
      
  let productsresult=[];
  let catagoriesresult=[];
      
      products.push({
        count:products.length
    });
    catagories.push({
        count:catagories.length
    });
    productsresult.push(products);
    catagoriesresult.push(catagories)
    console.log('Results',productsresult);
    console.log('Results',catagoriesresult);
  }
 
        
  count();
  // Use default router
  server.use(router)
  server.listen(3000, () => {
    console.log('JSON Server is running')
  })