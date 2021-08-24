import { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypeSelector } from '../hooks/useTypeSelector';

const TodoList: React.FC = () => {
  const { todos, error, loading, page, limit } = useTypeSelector(
    (state) => state.rTodo
  );

  const { fetchTodos, setTodoPage } = useActions();

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.id} - {todo.title}
          </div>
        ))}
      </div>
      <ul style={{ display: 'flex', margin: 0, padding: 0 }}>
        {pages.map((p) => (
          <li
            onClick={() => setTodoPage(p)}
            style={{
              listStyle: 'none',
              padding: '5px 10px',
              border: p === page ? '2px solid green' : '1px solid gray',
            }}
            key={p}
          >
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
