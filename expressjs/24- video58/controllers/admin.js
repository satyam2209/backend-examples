const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => { 
    res.render('admin/add-product', { 
        pageTitle: 'Add Product', 
        path: '/add-product',
    });
};

exports.getAdminProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'All Admin Product List',
            path: '/products',
        });
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;

    const product = new Product(title, description, price, imageUrl); // {title: value}
    product.save();
    res.redirect('/');
};