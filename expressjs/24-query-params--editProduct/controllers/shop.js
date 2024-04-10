const Product = require('../models/product')


exports.getProducts = (req, res, next) => { 
    const callbackFnBody = (products) => {
    // when we send template engines like pug or ejs then we render the file
    res.render('shop/product-list', {
        prods: products,
        pageTitle: 'Shop',
        path: '/product-list',
    });
    };  
    Product.fetchAll(callbackFnBody); // [{title: value}...]  
}

exports.getShopIndex = (req, res, next) => {
   Product.fetchAll((products) => {
    res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
    });
   });
}

exports.getMyCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'My Cart',
        path: '/cart',
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'My Checkout',
        path: '/checkout',
    });
}

exports.getMyOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'My Orders',
        path: '/orders',
    });
}

exports.getProductDetails = (req, res, next) => {
    const productId = req.params.productId;
    // filter the data using the productId and send that product to view
    // console.log('productId:', productId);
    Product.findProductById(productId, (product) => {
        // console.log('Product is', product);
        res.render('shop/product-details', {
            pageTitle: 'My Product Details',
            path: '/product-details',
            product: product,
        })
    });
    
}