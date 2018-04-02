const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_products_db');

const Category = conn.define('category',{
  name: Sequelize.STRING
});

const Product = conn.define('product',{
  name: Sequelize.STRING
});

Product.belongsTo(Category);

const syncAndSeed = ()=>{
  conn.sync({ force:true })
  .then(()=>{
    Promise.all([
      Category.create({name: '15-Category'})
      .then(category => {
        Product.create({name: '3-Product'})
      .then( product => product.setCategory(category));
      }),
      Category.create({name: '32-Category'})
      .then(category => {
        Product.create({name: '12-Product'})
      .then( product => product.setCategory(category));
      }),
      Category.create({name: '26-Category'})
      .then(category => {
        Product.create({name: '44-Product'})
      .then( product => product.setCategory(category));
      }),
      Category.create({name: '39-Category'})
    ]);
  });
};

module.exports = {
  syncAndSeed,
  models: {
    Product,
    Category
  }
};
