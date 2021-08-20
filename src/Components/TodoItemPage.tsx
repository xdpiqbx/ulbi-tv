import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ITodo } from '../types/types';

export interface TodoItemPageParams {
  id: string;
}

const TodoItemPage: React.FC = () => {
  const [todo, setTodo] = useState<ITodo | null>(null);
  const { id } = useParams<TodoItemPageParams>();
  const { push } = useHistory();

  useEffect(() => {
    fetchTodo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchTodo() {
    try {
      const URL = `https://jsonplaceholder.typicode.com/todos/${id}`;
      const response = await axios.get<ITodo>(URL);
      setTodo(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={() => push('/todos')}>Back</button>
      <h1>{todo?.id} Page</h1>
      <div>{todo?.title}</div>
    </div>
  );
};

export default TodoItemPage;
