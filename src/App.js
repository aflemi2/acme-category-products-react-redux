import React, { Component } from 'react';
import Nav from './Nav';
import { loadProducts } from './store';
import { connect } from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom';
import Products from './Products';

class App extends Component {
  componentDidMount(){
    this.props.loadProducts();
  }
  render(){
    return (
      <Router>
        <div>
          <Nav />
          <Route path='/products' exact component={ Products } />
        </div>
      </Router>
    );
  }
}

const mapDispatch = (dispatch)=> {
  return {
    loadProducts: ()=> dispatch(loadProducts())
  };
};

export default connect(null, mapDispatch)(App);
