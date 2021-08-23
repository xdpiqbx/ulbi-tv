import { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypeSelector } from '../hooks/useTypeSelector';

const UserList: React.FC = () => {
  const { users, error, loading } = useTypeSelector((state) => state.rUser);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
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
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
