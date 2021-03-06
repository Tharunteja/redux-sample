import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './Container/App';
import RootReducer from './store/reducer';


const store = createStore(RootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

