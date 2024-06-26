// const products = [];
// for storing data in files

const fs = require('fs');
const path = require('path');

module.exports = class Product {

    constructor(incomingTitle) {
        this.title = incomingTitle;
    }

    save(){
        const pathBuilt = path.join(path.dirname(require.main.filename),
        'data',
        'product.json'
        );

        fs.readFile(pathBuilt, (err, fileContent) => {
            let products = [];

            if(!err){
                products = JSON.parse(fileContent);
            }
            console.log('this', this);
            products.push(this) // this is pointing to class instance

            fs.writeFile(pathBuilt, JSON.stringify(products), (err) => {
                console.log('err', err)
            });
        });

        // products.push(this); // {title: 'xxxxxx'}
    }

    static fetchAll(){
        // return products;
        return [];
    }
}