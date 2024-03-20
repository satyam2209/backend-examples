const express = require('express');
const router = express.Router();

// here check post + method
router.get("/", (req, res, next) => {
    res.send("<h1>expressjs</h1>");
})

router.use("/contact", (req, res, next) => {  
    res.send("<h1>contact us</h1>");
})

module.exports = router;