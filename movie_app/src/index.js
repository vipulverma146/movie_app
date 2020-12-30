import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';

import './index.css';
import App from './Components/App';
import rootReducer from './reducers';

// function logger(obj,next,action)-----> logger(obj)(next)(action)

const logger=function ({dispatch,getState}){
  return function(next){
    return function(action){
      // middleware code
      console.log("ACTION_TYPE",action.type);
      next(action);
    }
  }
}

const store=createStore(rootReducer,applyMiddleware(logger));
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

