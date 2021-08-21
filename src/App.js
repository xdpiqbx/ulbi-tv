import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const stateCash = useSelector((state) => state.cash);

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  return (
    <div>
      <div style={{ fontSize: '3rem' }}>{stateCash}</div>
      <button onClick={() => addCash(parseInt(prompt('Add')))}>Incr</button>
      <button onClick={() => getCash(parseInt(prompt('Get')))}>Decr</button>
    </div>
  );
}

export default App;
