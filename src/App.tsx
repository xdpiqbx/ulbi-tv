import React from 'react';
import Card, { CardVariant } from './Components/Card';
import UserList from './Components/UserList';
import { IUser } from './types/types';

function App() {
  const users: IUser[] = [
    {
      id: 1,
      name: 'Ulbi',
      email: 'ulbi@m.com',
      address: { city: 'Moksha', street: 'Olenia', zipcode: '679 907' },
    },
    {
      id: 2,
      name: 'Tim',
      email: 'tim@m.com',
      address: { city: 'Spbg', street: 'Octobeer', zipcode: '687 907' },
    },
  ];
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
      <UserList users={users} />
    </div>
  );
}

export default App;
