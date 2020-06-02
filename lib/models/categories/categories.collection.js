

const Model = require('../model');
const schema = require('../categories/categories.schema');

class Catagory extends Model {
    constructor() {
        super(schema);
    }
}

module.exports = new Catagory();