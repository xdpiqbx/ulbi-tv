import { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypeSelector } from '../hooks/useTypeSelector';

const TodoList: React.FC = () => {
  const { todos, error, loading, page, limit } = useTypeSelector(
    (state) => state.rTodo
  );

  const { fetchTodos } = useActions();

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
