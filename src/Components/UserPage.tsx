import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IUser } from '../types/types';
import List from './List';
import UserItem from './UserItem';

export interface UserPageProps {}

const UserPage: React.FC<UserPageProps> = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useHistory();

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
    <>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            onClick={(user) => history.push(`/users/${user.id}`)}
            user={user}
            key={user.id}
          />
        )}
      />
    </>
  );
};

export default UserPage;
