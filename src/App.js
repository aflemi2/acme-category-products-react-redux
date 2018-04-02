import React, { Component } from 'react';
import Nav from './Nav';
import { loadProducts, loadCategories } from './store';
import { connect } from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom';
import Products from './Products';
import Categories from './Categories';

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
