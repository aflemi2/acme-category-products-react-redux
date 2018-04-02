import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Category = ({ category, catProducts })=> {
  if(!category){
    return null;
  }
  return (
    <div>
      <h1>{ category.name }</h1>
      <button>Delete Category</button>
      <ul>
      {
        catProducts.map( product => {
          return (
            <li key={ product.id }>
              <Link to={`/products/${product.id}`}>{ product.name }</Link>
            </li>
          );
        })
      }
    </ul>
    </div>
  );
};

const mapStateToProps = ({ categories, products }, { id })=> {
  const category = categories.find( category => category.id === id );
  const catProducts = products.filter( product => product.categoryId === id);
  return {
    category,
    catProducts
  };
};

export default connect(mapStateToProps)(Category);
