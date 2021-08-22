import { put, takeEvery } from 'redux-saga/effects';
import {
  addCashAction,
  ASYNC_ADD_CASH,
  ASYNC_GET_CASH,
  getCashAction,
} from '../store/cashReducer';
// put - это как dispatch для синхронный actions

// Эффекты из Redux Saga

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function* incrementWorker() {
  yield delay(1000); // перед каждым асинхронным действием пишем yield
  yield put(addCashAction(1));
}

function* decrementWorker() {
  yield delay(1000); // перед каждым асинхронным действием пишем yield
  yield put(getCashAction(1));
}

export function* countWatcher() {
  yield takeEvery(ASYNC_ADD_CASH, incrementWorker);
  yield takeEvery(ASYNC_GET_CASH, decrementWorker);
}
