const express = require('express');
const router = express.Router();
// const path = require('path');
const viewPath = require('../utils/path');

const products = [];

// GET - /add-product
router.get('/add-product', (req, res, next)=>{   

    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    // res.sendFile(viewPath('add-product.html'));
    res.render('add-product', { pageTitle: 'Add Product' });
})


// POST - //add-product
router.post("/add-product", (req, res, next) => {
        console.log(req.body);
        products.push({title: req.body.title});
        res.redirect('/');
    })


// module.exports = router;

// when export multiple

module.exports = {
    routes: router,
    products: products,
};