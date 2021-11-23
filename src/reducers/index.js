import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';

const rootReducers = combineReducers({
  // ES6 shorthand is just counterReducer
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default rootReducers;
