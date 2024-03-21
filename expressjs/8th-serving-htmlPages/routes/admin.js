const express = require('express');
const router = express.Router();
const path = require('path');

// this is also a way but this is not a good way

// router.get('/admin/add-product', (req, res, next)=>{

// GET - /add-product
router.get('/add-product', (req, res, next)=>{
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"/><button type="submit">Send</button></form>');

    // we also send data on same route because the method is different one is GET and one is POST
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button type="submit">Send</button></form>');

    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
})

// router.post("/admin/product", (req, res, next) => {
// router.post("/product", (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// })

//we also write same route name when method id different one is GET and one is POST

// POST - //add-product
router.post("/add-product", (req, res, next) => {
        console.log(req.body);
        res.redirect('/');
    })

module.exports = router;