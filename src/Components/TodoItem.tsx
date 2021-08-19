import React from 'react';
import { ITodo } from '../types/types';

export interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li
      style={{
        listStyle: 'none',
        padding: '15px',
        border: '1px solid gray',
      }}
    >
      <input type="checkbox" checked={todo.completed} />
      {todo.id} {todo.title}
    </li>
  );
};

export default TodoItem;
