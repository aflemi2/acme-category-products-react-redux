import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const SET_CATEGORIES = 'SET_CATEGORIES';
const CREATE_CATEGORY = 'CREATE_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';

const SET_PRODUCTS = 'SET_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

const productsReducer = (state = [], action)=> {
  switch(action.type){
    case SET_PRODUCTS:
      state = action.products;
      break;
    case CREATE_PRODUCT:
      state = [ ...state, action.product];
      break;
    case DELETE_CATEGORY:
      state = state.filter( product => product.categoryId !== action.category.id);
      break;
    case DELETE_PRODUCT:
      state = state.filter( product => product.id !== action.product.id);
      break;
  }
  return state;
};

const categoriesReducer = (state = [], action)=> {
  switch(action.type){
    case SET_CATEGORIES:
      state = action.categories;
      break;
    case CREATE_CATEGORY:
      state = [ ...state, action.category];
      break;
    case DELETE_CATEGORY:
      state = state.filter( category => category.id !== action.category.id);
      break;
  }
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

const loadCategories = ()=>{
  return (dispatch)=>{
    return axios.get('/api/categories')
    .then( result => result.data)
    .then( categories => dispatch({
      type: SET_CATEGORIES,
      categories
      })
    );
  };
};

const deleteProduct = ( product, history )=>{
  return (dispatch)=>{
    return axios.delete(`/api/products/${product.id}`)
    .then( () => dispatch({
      type: DELETE_PRODUCT,
      product
      })
    )
    .then( ()=> {
      history.push('/products');
    });
  };
};

const deleteCategory = ( category, history )=>{
  return (dispatch)=>{
    return axios.delete(`/api/categories/${category.id}`)
    .then( () => dispatch({
      type: DELETE_CATEGORY,
      category
      })
    )
    .then( ()=> {
      history.push('/categories');
    });
  };
};

const createCategory = ( category, history )=>{
  return (dispatch)=>{
    return axios.post('/api/categories', category)
    .then( result => result.data)
    .then( category => dispatch({
      type: CREATE_CATEGORY,
      category
      })
    )
    .then( ()=> {
      history.push('/categories');
    });
  };
};

const reducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export { loadProducts, loadCategories , deleteProduct, deleteCategory, createCategory };
