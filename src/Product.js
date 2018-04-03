import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from './store';

class Product extends Component {
  constructor(props){
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(){
    this.props.deleteProduct({ id: this.props.id });
  }

  render(){
    const { product, category} = this.props;
    const { onDelete } = this;

    if(!product){
      return null;
    }
    if(!category){
      return null;
    }
    return (
      <div>
        <h1>{ product.name }</h1>
        <h2>Belongs to { category.name }.</h2>
        <button onClick={ onDelete }>Delete Product</button>
      </div>
    );
  }
}

const mapStateToProps = ( { products, categories }, { id } )=> {
  const product = products.find( product => product.id === id );
  const category = categories.find( category => category.id === product.categoryId);

  return {
    product,
    category
  };
};

const mapDispatchToProps = ( dispatch, { history } )=> {
  return {
    deleteProduct: ( product )=> dispatch(deleteProduct( product, history ))
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( Product );
