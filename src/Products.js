import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = ({ products })=> {
  return (
    <ul>
      {
        products.map( product => {
          return (
            <li key={ product.id }>
              <Link to={`/products/${product.id}`}>{ product.name }</Link>
            </li>
          );
        })
      }
    </ul>
  );
};

const mapState = ({ products })=> {
  console.log(products);
  return {
    products
  };
};

export default connect(mapState)(Products);
