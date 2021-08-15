import { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

// import s from './Login.module.css';
const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('Auth', 'true');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={login}>
        <MyInput
          value="Введите логин"
          onChange={() => {}}
          type="text"
          placeholder="Login"
        />

        <MyInput
          value="Введите пароль"
          onChange={() => {}}
          type="password"
          placeholder="Password"
        />

        <MyButton type="submit">Войти</MyButton>
      </form>
    </div>
  );
};
export default Login;
