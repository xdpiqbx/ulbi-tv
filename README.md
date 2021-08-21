# Практика React

## [Канал Ulbi-TV](https://www.youtube.com/channel/UCDzGdB9TTgFm8jRXn1tBdoA)

---

### [Плейлист Redux](https://www.youtube.com/playlist?list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6)

---

|[Видео 2. Redux и React. State, reducer, action + redux hooks useDispatch и useSelector](https://www.youtube.com/watch?v=Dzzeir85i3c&list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6&index=3)

```code
npx create-react-app .
npm i redux react-redux
```

---

Создать `store` - объект который содержит методы получения изменения и подписатся на изменение состояния

`index.js`

```js
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// пример action
// const action = { type: 'ADD_CASH', payload: 10 };

const defaultState = { cash: 0 };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return { ...state, cash: state.cash + action.payload };
    case 'GET_CASH':
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

Для изменения состояния нужен `dispatch` в компоненте

```js
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
```

---

### [Видео 3. Redux и React. Combine Reducers, redux devtools](https://www.youtube.com/watch?v=ldgnmiPIftw&list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6&index=3)

```code
npm i redux-devtools-extension
```

Combine Reducers in `store/index.js`
Added `redux-devtools-extension`

```js
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import Reducers
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';

// Combine Reducers
const rootReducer = combineReducers({
  rCash: cashReducer,
  rCustomer: customerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
```

Теперь в компоненте App
`state.rCash.cash`

```js
const stateCash = useSelector((state) => state.rCash.cash);
```

[video Commit](https://github.com/xdpiqbx/ulbi-tv/commit/804122c6aa45ebaef76aa37f4d4f08b584773d67)

---

[Видео 4. React и Redux.Action creators. Работа с массивами. Рефакторинг](https://www.youtube.com/watch?v=WLeK7vIEi5I&list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6&index=4)

```code

```

---

### [React JS фундаментальный курс от А до Я](https://www.youtube.com/watch?v=GNrdg3PzpJQ)

[Моя ветка на GIT](https://github.com/xdpiqbx/ulbi-tv/tree/react-js-fundamentals-course-09-08-2021)

---

### [React TypeScript ПОЛНЫЙ КУРС 2021. Props, Events, Router, Hooks, Requests.](https://www.youtube.com/watch?v=92qcfeWxtnY)

[Моя ветка на GIT](https://github.com/xdpiqbx/ulbi-tv/tree/react-type-script-props-events-router-hook-req)

---

### [React & Redux & TypeScript ПОЛНЫЙ КУРС 2021](https://www.youtube.com/watch?v=ETWABFYv0GM)

### [ТОП 5 REACT ХУКОВ (React hooks). Делаем свои React хуки](https://www.youtube.com/watch?v=ks8oftGP2oc)

### [Mobx & React Полный курс 2021](https://www.youtube.com/watch?v=jn-L1SFYdIc)

### [Websockets React & Node js ПОЛНЫЙ КУРС PAINT ONLINE & Canvas](https://www.youtube.com/watch?v=KVeMsy4qCdg)

### [Real Time КЛИЕНТ-СЕРВЕР на JavaScript. Long polling, event sourcing, websockets & комнаты](https://www.youtube.com/watch?v=o43iiH4kGqg)

### [Продвинутая JWT авторизация на React и Node js. Access, refresh, активация по почте](https://www.youtube.com/watch?v=fN25fMQZ2v0)

---

## Практика!!!

### 1. [Плейлист MERN - FullStack разработка облачного хранилища. MERN Mongo Express React Node.js Облачное хранилище - Практический курс 2020.](https://www.youtube.com/playlist?list=PL6DxKON1uLOGd4E6kG6d5K-tsTFj-Deln)

### 2. [React & Node.js ИНТЕРНЕТ МАГАЗИН С НУЛЯ. PERN stack PostgreSQL + express + React js + node.js](https://www.youtube.com/watch?v=H2GCkRF9eko&list=PL6DxKON1uLOFJ5_dDcX7G1osKnsBlCaaT&index=2)

### 3. [Nest js & Next js ПОЛНЫЙ КУРС. FullStack разработка SSR на React TypeScript. Музыкальная платформа](https://www.youtube.com/watch?v=A0CfYSVzAZI&list=PL6DxKON1uLOFJ5_dDcX7G1osKnsBlCaaT&index=5)

---
