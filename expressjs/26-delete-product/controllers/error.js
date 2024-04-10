exports.get404 = (req, res, next)=>{    
    // pass 404.pug
   res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' });
};