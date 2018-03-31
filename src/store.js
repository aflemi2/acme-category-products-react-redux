import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const SET_PRODUCTS = 'SET_PRODUCTS';
const productsReducer = (state = [], action)=> {
  return state;
};

const categoriesReducer = (state = [], action)=> {
  return state;
};

const loadProducts = ()=>{
  return (dispatch)=>{
    return axios.get('/api/products')
    .then( result => result.data)
    .then( products => dispatch({
      type: SET_PRODUCTS,
      products
      })
    );
  };
};
const reducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export { loadProducts };
