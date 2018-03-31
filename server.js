const express = require('express');
const app = express();
const path = require('path');
const { models, syncAndSeed } = require('./db');
const { Product, Category } = models;

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/api/products', (req, res, next)=> {
  Product.findAll({
  })
  .then( products => res.send(products))
  .catch(next)
});

app.get('/api/categories', (req, res, next)=> {
  Category.findAll({
  })
  .then( categories => res.send(categories))
  .catch(next)
});


const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Listening on port ${port}`));

syncAndSeed();
