'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const { v4: uuidv4 } = require('uuid');
// const timestamp = require("../middleware/timestamp.js")
// const logRequest = require('../middleware/logger.js');
// const notFoundHandler = require('../middleware/404.js');
// const errorHandler = require('../middleware/500.js');
const ProductRouter=require('../routes/product');
const CatagoriesRouter=require('../routes/categories');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// app.use(timestamp);
// app.use(logRequest);
app.use('/api/v1',ProductRouter);
app.use('/api/v1',CatagoriesRouter);



// let db = [];
// let db2 = [];
// //products routes
// app.post('/products', (req, res) => {
//     let { name, catagory, display, description } = req.body;
//     let record = { name, catagory, display, description }
//     record.id = db.length + 1;
//     db.push(record);
//     res.json(record);
// });
// app.get('/products', (req, res) => {
//     res.json(db);
// });
// app.get('/products/:id', (req, res) => {
//     ;
//     let id = req.params.id;
//     let record = db.filter(record => record.id === parseInt(id));
//     res.json(record)
// })

// app.put('/products/:id', (req, res) => {

//     let idUpdate = req.params.id;
//     let { id, name, catagory, display, description } = req.body;
//     let recordupdate = { id, name, catagory, display, description };
//     db = db.map((record => {
//         if (record.id === idUpdate) {
//             recordupdate = record;
//         }
//     }));

//     res.status(200).json(recordupdate);
// })
// app.delete('/products/:id', (req, res) => {
//     let id = req.params.id;
//     let record = db.filter(record => record.id === id);
//     res.status(200).json({"message":"product  is deleted"});
// })



// //catagories routes
// app.post('/categories', (req, res) => {
//     let { name, display, description } = req.body;
//     let record = { name, display, description }
//     record.id = parseInt(uuidv4());
//     db2.push(record);
//     res.json(record);
// });
// app.get('/categories', (req, res) => {
//     res.json(db2);
// })
// app.get('/categories/:id', (req, res) => {
//     let id = req.params.id;
//     let record = db2.filter(record => record.id === id);
//     res.json(record)
// });
// app.put('/categories/:id', (req, res) => {

//     let idUpdate = req.params.id;
//     let { id, name, display, description } = req.body;
//     let recordupdate = { id, name, display, description };
//     db2 = db2.map((record => {
//         if (record.id === idUpdate) {
//             recordupdate = record;
//         }
//     }));

//     res.status(200).json(recordupdate);
// })
// app.delete('/categories/:id', (req, res) => {
//     let id = req.params.id;
//     let record = db2.filter(record => record.id === id);
//     res.status(200).json({"message":"catagory  is deleted"});
// })
// app.get('/bad', (req, res)=> {
//     res.status(500).json({});
//  });

// app.use(notFoundHandler);
// app.use(errorHandler);
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => { console.log(`Listening on port ${port}`);});
  },
};