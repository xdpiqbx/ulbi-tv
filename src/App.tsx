import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Card, { CardVariant } from './Components/Card';
import UserList from './Components/UserList';
import List from './Components/List';
import { IUser } from './types/types';
import UserItem from './Components/UserItem';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
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
    </div>
  );
}

export default App;
