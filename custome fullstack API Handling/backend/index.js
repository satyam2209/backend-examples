/* blackbox api => this means those api whose have not controlled by you only recieve data ,
 and behind the scence how it works we dont know as like GITHUB API */

import express from "express";

const app = express();

app.get("/api/products", (req, res)=>{
      const products = [
        {
            id: 1,
            name: 'ferrari',
            price: 200,
            image: 'https://images.pexels.com/photos/404190/pexels-photo-404190.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 2,
            name: 'BMW',
            price: 400,
            image: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 3,
            name: 'mercedes',
            price: 600,
            image: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 4,
            name: 'audi',
            price: 800,
            image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 5,
            name: 'lamborghini',
            price: 1000,
            image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]

      // how to handle search queries
//Ex:-  http://localhost:4000/api/products?search=ferrari
// ? => it is known query parameter (and see what is written after query parameter in above example , search is written)

     if(req.query.search){
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
     }


      setTimeout(()=>{
        res.send(products);
      }, 3000);
})


const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`serve is at port ${PORT}`)
})



// npm init -y (this make default package.json)

