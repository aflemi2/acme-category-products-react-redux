import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCategory } from './store';

class Category extends Component {
  constructor(props){
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(){
    this.props.deleteCategory({ id: this.props.id});
  }

  render(){
    const { category, catProducts } = this.props;
    const { onDelete } = this;
    if(!category){
      return null;
    }
    return (
      <div>
        <h1>{ category.name }</h1>
        <button onClick={ onDelete }>Delete Category</button>
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
  }
}

const mapStateToProps = ( { categories, products }, { id } )=> {
  const category = categories.find( category => category.id === id );
  const catProducts = products.filter( product => product.categoryId === id);
  return {
    category,
    catProducts
  };
};

const mapDispatchToProps = ( dispatch, { history } )=> {
  return {
    deleteCategory: ( category )=> dispatch(deleteCategory( category, history ))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
