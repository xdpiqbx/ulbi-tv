import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAddCashAction, asyncGetCashAction } from './store/cashReducer';
import { fetchUsers } from './store/customerReducer';

const App = () => {
  const count = useSelector((state) => state.rCash.cash);
  const users = useSelector((state) => state.rCustomer.users);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div className="count">{count}</div>
      <div className="btns">
        <button className="btn" onClick={() => dispatch(asyncAddCashAction())}>
          ИНКРЕМЕНТ++
        </button>
        <button className="btn" onClick={() => dispatch(asyncGetCashAction())}>
          ДЕКРЕМЕНТ--
        </button>
        <button className="btn" onClick={() => dispatch(fetchUsers())}>
          ПОЛУЧИТЬ ЮЗЕРОВ--
        </button>
      </div>
      <div className="users">
        {users.map((user) => (
          <div key={user.id} className="user">
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
