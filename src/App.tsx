// import Card, { CardVariant } from './Components/Card';
// import EventsExample from './Components/EventsExample';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import UserPage from './Components/UserPage';
import TodosPage from './Components/TodosPage';
import UserItemPage from './Components/UserItemPage';
import TodoItemPage from './Components/TodoItemPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/users">users</NavLink>
        <NavLink to="/todos">todos</NavLink>
      </div>
      {/* <EventsExample />
        <Card
          onClick={(num: number) => {
            console.log('click', num);
          }}
          variant={CardVariant.outlined}
          width="200px"
          height="200px"
        >
          <button>Button</button>
        </Card> */}
      <Route path="/todos" exact>
        <TodosPage />
      </Route>
      <Route path="/users" exact>
        <UserPage />
      </Route>
      <Route path="/users/:id">
        <UserItemPage />
      </Route>
      <Route path="/todos/:id">
        <TodoItemPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
