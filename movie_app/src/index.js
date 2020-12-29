import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './Components/App';
import rootReducer from './reducers';



const store=createStore(rootReducer);
console.log('Store',store);
// console.log(' BEFORE STATE',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{
//     name:'Super Man'
//   }]
// })
// console.log(' AFTER STATE',store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

