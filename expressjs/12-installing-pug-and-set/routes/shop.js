const express = require('express');
const router = express.Router();
// const path = require('path');
const viewPath = require('../utils/path');

const adminData = require("./admin")

// here check post + method
router.get("/", (req, res, next) => {
    
    //  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    console.log(adminData.products);
    // res.sendFile(viewPath('shop.html'));
    // when we send template engines like pug or ejs then we render the file
    res.render('shop');
    
})

router.use("/contact", (req, res, next) => {  
    res.send("<h1>contact us</h1>");
})

module.exports = router;