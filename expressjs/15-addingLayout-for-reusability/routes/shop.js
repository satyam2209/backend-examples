const express = require('express');
const router = express.Router();
// const path = require('path');
const viewPath = require('../utils/path');

const adminData = require("./admin")

// here check post + method
router.get("/", (req, res, next) => {
    
    console.log(adminData.products);
    // when we send template engines like pug or ejs then we render the file
    res.render('shop', {prods: adminData.products, pageTitle: 'shop', path: '/'});
    
});


module.exports = router;