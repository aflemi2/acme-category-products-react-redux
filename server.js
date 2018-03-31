const express = require('express');
const app = express();
const path = require('path');
const { models, syncAndSeed } = require('./db');
const { Product, Category } = models;

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use(require('body-parser').json());
app.get('/', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/products', (req, res, next)=> {
  Product.findAll({})
  .then( products => res.send(products))
  .catch(next);
});

app.get('/api/categories', (req, res, next)=> {
  Category.findAll({})
  .then( categories => res.send(categories))
  .catch(next);
});

app.post('/api/products', (req, res, next)=> {
  console.log(req);
  Product.create({name: 'testProduct'})
  .then( product => res.send(product))
  .catch(next);
});

app.delete('/api/products/:id', (req, res, next)=>{
  Product.findById(req.params.id)
  .then( product => product.destroy())
  .then( ()=> res.sendStatus(204))
  .catch(next);
});

app.post('/api/categories', (req, res, next)=> {
  Category.create(req.body)
  .then( product => res.send(product))
  .catch(next);
});

app.delete('/api/categories/:id', (req, res, next)=>{
  Category.findById(req.params.id)
  .then( category => category.destroy())
  .then( ()=> res.sendStatus(204))
  .catch(next);
});

app.use((err, req, res, next)=> {
  res.status(500).send(err);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Listening on port ${port}`));

syncAndSeed();
