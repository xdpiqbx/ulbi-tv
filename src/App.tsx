import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Card, { CardVariant } from './Components/Card';
import UserList from './Components/UserList';
import List from './Components/List';
import { ITodo, IUser } from './types/types';
import UserItem from './Components/UserItem';
import TodoItem from './Components/TodoItem';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      const URL = 'https://jsonplaceholder.typicode.com/users';
      const response = await axios.get<IUser[]>(URL);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

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
    <div>
      <Card
        onClick={(num: number) => {
          console.log('click', num);
        }}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>Button</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
}

export default App;
