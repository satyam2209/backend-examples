const express = require('express');
const router = express.Router();
// const path = require('path');
const viewPath = require('../utils/path');

// here check post + method
router.get("/", (req, res, next) => {
    
    //  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.sendFile(viewPath('shop.html'));
})

router.use("/contact", (req, res, next) => {  
    res.send("<h1>contact us</h1>");
})

module.exports = router;