const path = require('path');
const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop')

// here check post + method
router.get("/", shopController.getShopIndex);

router.get("/products", shopController.getProducts);

// always put same routes before dynamic routes
router.get("/products/:productId", shopController.getProductDetails);

router.get("/cart", shopController.getMyCart);

router.get("/checkout", shopController.getCheckout);

router.get("/orders", shopController.getMyOrders);


module.exports = router;