import React from 'react';
import { IUser } from '../types/types';

export interface UserItemProps {
  user: IUser;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <li
      style={{
        listStyle: 'none',
        padding: '15px',
        border: '1px solid gray',
      }}
    >
      {user.id} проживает в городе {user.address.city} на улице{' '}
      {user.address.street}
    </li>
  );
};

export default UserItem;
