/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, loggedStatus } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+ADD+</button>
      <button onClick={() => dispatch(decrement())}>-MINUS-</button>
      {isLogged ? (
        <>
          <button onClick={() => dispatch(loggedStatus())}>Logout</button>
          <h3>You are currently logged IN</h3>
        </>
      ) : (
        <>
          <button onClick={() => dispatch(loggedStatus())}>Login</button>
          <h3>You are currently logged OUT</h3>
        </>
      )}
    </div>
  );
}

export default App;
