const express = require('express');
const router = express.Router();
const { getProduct ,deleteProduct ,updateProduct ,postProduct } = require('../controllers/index');

router.get('/products', getProduct );

router.post('/products', postProduct );

router.delete('/products/:id',  deleteProduct );

router.get('/products/:id',  updateProduct );

router.put('/products/:id',  updateProduct );

module.exports = router;
