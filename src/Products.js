import React from 'react';
import { connect } from 'react-redux';

const Products = ({ products })=> {
  return (
    <ul>
      {
        products.map( product => {
          return (
            <li key={ product.id }>
              { product.name }
            </li>
          );
        })
      }
    </ul>
  );
};

const mapState = ({products })=> {
  return {
    products
  };
};

export default connect(mapState)(Products);
