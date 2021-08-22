import { useTypeSelector } from '../hooks/useTypeSelector';

export interface UserListProps {}

const UserList: React.FC<UserListProps> = () => {
  const { users, error, loading } = useTypeSelector((state) => state.rUser);
  console.log({ users, error, loading });

  return (
    <div>
      <h1>UserList</h1>
    </div>
  );
};

export default UserList;
