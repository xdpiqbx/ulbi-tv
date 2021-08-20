import axios from 'axios';
import { useEffect, useState } from 'react';
import { IUser } from '../types/types';
import { useParams, useHistory } from 'react-router';

export interface UserItemPageParams {
  id: string;
}

const UserItemPage: React.FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const { id } = useParams<UserItemPageParams>();
  const { push } = useHistory();

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchUser() {
    try {
      const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
      const response = await axios.get<IUser>(URL);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button onClick={() => push('/users')}>Back</button>
      <h1>{user?.name} Page</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;
