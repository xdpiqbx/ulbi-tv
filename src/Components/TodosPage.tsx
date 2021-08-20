import axios from 'axios';
import { useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import List from './List';
import TodoItem from './TodoItem';

export interface TodosPageProps {}

const TodosPage: React.FC<TodosPageProps> = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos();
  }, []);
  async function fetchTodos() {
    try {
      const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
      const response = await axios.get<ITodo[]>(URL);
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPage;
