const Product = require('../models/product_model');

const  getProduct =  async(req, res) =>{
    const result= await Product.find();
    if(!result){
        throw new Error('An error occurred');
    }
    return res.status(200).send(result);
}

const  postProduct =  async(req, res) =>{
    const result= await Product.create(req.body);
    if(!result){
        throw new Error('An error occurred');
    }
    return res.status(201).send(result);
}

const  deleteProduct =  async(req, res) =>{
    const result= await Product.deleteOne({_id : req.params.id });
    if(!result){
        throw new Error('An error occurred');
    }
    return res.status(202).send(result);
}

const  updateProduct =  async(req, res) =>{
    console.log('update');
    const result= await Product.findById(req.params.id );
    if(!result){
        throw new Error('An error occurred');
    }
    Object.assign(result, req.body);
    await result.save();
    return res.status(200).send(result);
}

module.exports = {
    getProduct,
    deleteProduct,
    updateProduct,
    postProduct
} ;

