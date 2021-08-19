import React from 'react';
import { IUser } from '../types/types';

import UserItem from './UserItem';

export interface UserListProps {
  users: IUser[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul style={{ margin: 0, padding: 0 }}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
