import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { fetchCustomers } from './asyncActions/customers';
import { addCashAction, getCashAction } from './store/cashReducer';
import {
  addCustomerAction,
  removeCustomerAction,
} from './store/customerReducer';

function App() {
  const dispatch = useDispatch();
  const stateCash = useSelector((state) => state.rCash.cash);
  const stateCustomers = useSelector((state) => state.rCustomer.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      id: Date.now(),
      name,
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  // const fetchAllCustomers = () => {
  //   dispatch(fetchCustomers());
  // };

  return (
    <div>
      <div style={{ fontSize: '3rem' }}>{stateCash}</div>
      <button onClick={() => addCash(1)}>Incr</button>
      <button onClick={() => getCash(1)}>Decr</button>
      <button onClick={() => addCustomer(prompt('Добавить клинета'))}>
        Добавить клинета
      </button>
      {/* <button onClick={() => fetchAllCustomers()}>
        Добавить всех клинетов
      </button> */}
      {stateCustomers.length > 0 ? (
        <ul style={{ listStyle: 'none' }}>
          {stateCustomers.map((customer) => (
            <li
              onClick={() => removeCustomer(customer)}
              style={{
                fontSize: '2rem',
                border: '1px solid black',
                margin: '5px',
                padding: '5px',
                cursor: 'pointer',
              }}
              key={customer.name}
            >
              {customer.name}
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ fontSize: '3rem', marginTop: 20 }}>
          Клиентов нет {`:(`}
        </div>
      )}
    </div>
  );
}

export default App;
