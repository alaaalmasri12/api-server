'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const ProductRouter=require('../routes/product');
const CatagoriesRouter=require('../routes/categories');
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/v1',ProductRouter);
app.use('/api/v1',CatagoriesRouter);
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => { console.log(`Listening on port ${port}`);});
  },
};