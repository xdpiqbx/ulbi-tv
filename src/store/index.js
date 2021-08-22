import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import createSagaMiddleware from '@redux-saga/core';
import { countWatcher } from '../saga/countSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  rCash: cashReducer,
  rCustomer: customerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(countWatcher);
