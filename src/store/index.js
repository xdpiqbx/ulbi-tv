import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';

const rootReducer = combineReducers({
  rCash: cashReducer,
  rCustomer: customerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
