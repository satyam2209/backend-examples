const express = require('express');
const router = express.Router();
// const path = require('path');
const viewPath = require('../utils/path');


// GET - /add-product
router.get('/add-product', (req, res, next)=>{   

    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.sendFile(viewPath('add-product.html'));
})


// POST - //add-product
router.post("/add-product", (req, res, next) => {
        console.log(req.body);
        res.redirect('/');
    })

module.exports = router;