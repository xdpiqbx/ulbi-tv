import React from 'react';
import { IUser } from '../types/types';

export interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <li
      onClick={() => onClick(user)}
      style={{
        listStyle: 'none',
        padding: '15px',
        border: '1px solid gray',
      }}
    >
      {user.name} проживает в городе {user.address.city} на улице{' '}
      {user.address.street}
    </li>
  );
};

export default UserItem;
