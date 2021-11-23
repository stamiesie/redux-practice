import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

// STORE -> GLOBALIZED STATE

// ACTION -> INCREMENT
const increment = () => ({
  type: 'INCREMENT',
});

const decrement = () => ({
  type: 'DECREMENT',
});

// REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
  }
};

const store = createStore(counter);

// Display in console
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
