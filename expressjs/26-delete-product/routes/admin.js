const path = require('path');
const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin')


// GET - /add-product
router.get('/add-product', adminController.getAddProduct);

// GET - /products
router.get('/admin-product', adminController.getAdminProducts);

// POST - //add-product
router.post("/add-product", adminController.postAddProduct);

// GET - /edit-product/34
router.get('/edit-product/:productId', adminController.getEditMyProduct);

// POST - /edit-product
router.post('/edit-product', adminController.saveModifedProduct);

// POST - /remove-product
router.post('/remove-product', adminController.removeProduct);

module.exports = router;