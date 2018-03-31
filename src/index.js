import React from 'react';
import { render } from 'react-dom';
import store, { loadProducts } from './store';

store.dispatch(loadProducts());

const root = document.getElementById('root');

render(<hr store={ store } />, root);
