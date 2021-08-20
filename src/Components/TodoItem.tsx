import React from 'react';
import { ITodo } from '../types/types';

export interface TodoItemProps {
  todo: ITodo;
  onClick: (todo: ITodo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onClick }) => {
  return (
    <li
      onClick={() => onClick(todo)}
      style={{
        listStyle: 'none',
        padding: '15px',
        border: '1px solid gray',
      }}
    >
      <input type="checkbox" checked={todo.completed} onChange={() => {}} />
      {todo.id} {todo.title}
    </li>
  );
};

export default TodoItem;
