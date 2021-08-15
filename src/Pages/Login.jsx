import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

// import s from './Login.module.css';
const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
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

        <MyButton onClick={() => {}}>Создать пост</MyButton>
      </form>
    </div>
  );
};
export default Login;
