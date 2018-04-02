import React from 'react';
import { connect } from 'react-redux';

const Product = ({ product })=> {
  if(!product){
    return null;
  }
  return (
    <div>
      <h1>{ product.name }</h1>
      <button>Delete Product</button>
    </div>
  );
};

const mapStateToProps = ({ products }, { id })=> {
  const product = products.find( product => product.id === id );
  return {
    product
  };
};

export default connect(mapStateToProps)(Product);
