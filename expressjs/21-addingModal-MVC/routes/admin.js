const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products')


// GET - /add-product
router.get('/add-product', productsController.getAddProduct);


// POST - //add-product
router.post("/add-product", productsController.postAddProduct);


// module.exports = {
//     routes: router,
//     products: products,
// };

module.exports = router;