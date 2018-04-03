import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProduct } from './store';

class ProductCreate extends Component {
  constructor(props) {
    super(props);
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd() {
    this.props.addProduct({name: this.props.name});
  }

  render() {
    const { onAdd } = this;
    return (
      <div>
        <button onClick={ onAdd }>Add Product</button>
      </div>
    );
  }
}
const mapStateToProps = ()=> {
  const randomNum = Math.floor(Math.random()*1000);
  const name = `${randomNum}-Product`;
  return {
    name
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    addProduct: (product)=> dispatch(createProduct(product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreate);
