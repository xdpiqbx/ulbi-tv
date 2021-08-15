import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/UI/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}
