import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const stateCash = useSelector((state) => state.rCash.cash);
  const stateCustomers = useSelector((state) => state.rCustomer.customers);

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };
  const addCustomer = (name) => {
    const customer = {
      id: Date.now(),
      name,
    };
    dispatch({ type: 'ADD_CUSTOMER', payload: customer });
  };

  const removeCustomer = (customer) => {
    dispatch({ type: 'REMOVE_CUSTOMER', payload: customer.id });
  };

  return (
    <div>
      <div style={{ fontSize: '3rem' }}>{stateCash}</div>
      <button onClick={() => addCash(parseInt(prompt('Add')))}>Incr</button>
      <button onClick={() => getCash(parseInt(prompt('Get')))}>Decr</button>
      <button onClick={() => addCustomer(prompt('Добавить клинета'))}>
        Добавить клинета
      </button>
      <button onClick={() => getCash(parseInt(prompt('Удалить клинета')))}>
        Удалить клинета
      </button>
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
