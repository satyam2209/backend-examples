const express = require('express');
const router = express.Router();
const path = require('path');

// here check post + method
router.get("/", (req, res, next) => {
    // res.send("<h1>expressjs</h1>");
    // res.sendFile('../views/shop.html') this is wrong way
    
    // add path 
    // here __dirname = D:\vsExample\expressjs\routes
    // and __dirname and the path module also detect the correct path no matter it is run on windows or linux and more
     res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
})

router.use("/contact", (req, res, next) => {  
    res.send("<h1>contact us</h1>");
})

module.exports = router;