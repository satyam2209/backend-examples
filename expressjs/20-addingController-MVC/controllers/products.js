const products = [];

exports.getAddProduct = (req, res, next) => {   

    res.render('add-product', { 
        pageTitle: 'Add Product', 
        path: '/add-product',
    });
}


exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
}


exports.getProducts = (req, res, next) => {    
    // when we send template engines like pug or ejs then we render the file
    res.render('shop', {
        prods: products,
        pageTitle: 'shop', 
        path: '/',
    });    
}