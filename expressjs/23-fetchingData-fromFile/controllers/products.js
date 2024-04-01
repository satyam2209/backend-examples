// const products = [];
const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {   

    res.render('add-product', { 
        pageTitle: 'Add Product', 
        path: '/add-product',
    });
}


exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    // products.push({title: req.body.title});
    const product = new Product(req.body.title); // {title: value}
    product.save();
    res.redirect('/');
}


exports.getProducts = (req, res, next) => { 
    const callbackFnBody = (products) => {
    // when we send template engines like pug or ejs then we render the file
    res.render('shop', {
        prods: products,
        pageTitle: 'shop',
        path: '/',
        hasProducts: products.length > 0,
    });
    };  
    Product.fetchAll(callbackFnBody); // [{title: value}...]  
}