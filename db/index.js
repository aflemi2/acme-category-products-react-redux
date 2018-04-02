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
      Product.create({name: '12-Product'}),
      Product.create({name: '2-Product'}),
      Product.create({name: '44-Product'}),
      Category.create({name: '15-Category'}),
      Category.create({name: '25-Category'})
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
