import React from 'react';
import { IUser } from '../types/types';

export interface UserListProps {
  users: IUser[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul style={{ margin: 0, padding: 0 }}>
      {users.map((user) => (
        <li
          key={user.id}
          style={{
            listStyle: 'none',
            padding: '15px',
            border: '1px solid gray',
          }}
        >
          {user.id} проживает в городе {user.address.city} на улице{' '}
          {user.address.street}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
