import React, { Component } from 'react';
import Nav from './Nav';
import { loadProducts, loadCategories } from './store';
import { connect } from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom';
import Products from './Products';
import Product from './Product';
import Categories from './Categories';
import Category from './Category';
import CategoryCreate from './CategoryCreate';
import ProductCreate from './ProductCreate';

class App extends Component {
  componentDidMount(){
    this.props.loadProducts();
    this.props.loadCategories();
  }
  render(){
    return (
      <Router>
        <div>
          <Nav />
          <Route path='/products' exact component={ Products } />
          <Route path='/categories' exact component={ Categories } />
          <Route path='/categories' exact component={ CategoryCreate } />
          <Route path='/products/:id' exact render={ ({ match })=> <Product id={ match.params.id*1 } />} />
          <Route path='/categories/:id' exact render={ ({ match })=> <Category id={ match.params.id*1 } />} />
          <Route path='/categories/:id' exact component={ ProductCreate } />
        </div>
      </Router>
    );
  }
}

const mapDispatch = (dispatch)=> {
  return {
    loadProducts: ()=> dispatch(loadProducts()),
    loadCategories: ()=> dispatch(loadCategories())
  };
};

export default connect(null, mapDispatch)(App);
