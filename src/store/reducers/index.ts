import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { todoReducer } from './todoReducer';

export const rootReducer = combineReducers({
  rUser: userReducer,
  rTodo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
