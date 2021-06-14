const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    name: String ,
    price:  String,
    status: Boolean
});

const Product = mongoose.model('Product', productSchema , 'Product_1');
module.exports = Product;