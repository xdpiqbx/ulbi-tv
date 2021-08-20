import Card, { CardVariant } from './Components/Card';
import EventsExample from './Components/EventsExample';
import { BrowserRouter, Route } from 'react-router-dom';
import UserPage from './Components/UserPage';
import TodosPage from './Components/TodosPage';

function App() {
  return (
    <div>
      <EventsExample />
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
      <UserPage />
      <TodosPage />
    </div>
  );
}

export default App;
