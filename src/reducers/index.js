import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';

const rootReducers = combineReducers({
  // ES6 shorthand is just counterReducer
  counterReducer,
  loggedReducer,
});

export default rootReducers;
