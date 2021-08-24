import axios from 'axios';
import { Dispatch } from 'redux';
import { TodoAction, TodoActionTypes } from '../../types/todos';

export const fetchTodos = (page: number = 1, limit: number = 10): Function => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`,
        { params: { _page: page, _limit: limit } }
      );
      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (error) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: 'Ошибка при загрузке todo',
      });
    }
  };
};

export function setTodoPage(page: number): TodoAction {
  return {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: page,
  };
}
