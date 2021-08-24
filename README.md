# Практика React

## [Канал Ulbi-TV](https://www.youtube.com/channel/UCDzGdB9TTgFm8jRXn1tBdoA)

---

[Continue](https://youtu.be/ETWABFYv0GM?t=2179)

## [React & Redux & TypeScript ПОЛНЫЙ КУРС 2021](https://www.youtube.com/watch?v=ETWABFYv0GM)

```code
npx create-react-app . --template typescript
npm i @types/react-redux redux react-redux redux-thunk axios
```

---

- Создать store

```js
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

export const store = createStore(rootReducer, applyMiddleware(thunk));
```

- Создать Root Reducer

```js
import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
export const rootReducer = combineReducers({ rUser: userReducer });
export type RootState = ReturnType<typeof rootReducer>;
```

- Обернуть App в Provider

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

- Использовать state в компонентах (useSelect не дружит с типами)

```js
import { useTypeSelector } from '../hooks/useTypeSelector';

export interface UserListProps {}

const UserList: React.FC<UserListProps> = () => {
  const { users, error, loading } = useTypeSelector((state) => state.rUser);
  console.log({ users, error, loading });

  return (
    <div>
      <h1>UserList</h1>
    </div>
  );
};

export default UserList;
```

- Хук для useSelector

```js
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
```

---

### [React JS фундаментальный курс от А до Я](https://www.youtube.com/watch?v=GNrdg3PzpJQ)

[Моя ветка на GIT](https://github.com/xdpiqbx/ulbi-tv/tree/react-js-fundamentals-course-09-08-2021)

---

### [React TypeScript ПОЛНЫЙ КУРС 2021. Props, Events, Router, Hooks, Requests.](https://www.youtube.com/watch?v=92qcfeWxtnY)

[Моя ветка на GIT](https://github.com/xdpiqbx/ulbi-tv/tree/react-type-script-props-events-router-hook-req)

---

### [Плейлист Redux](https://www.youtube.com/playlist?list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6)

[Моя ветка на GIT](https://github.com/xdpiqbx/ulbi-tv/tree/redux-playlist-10-2020)

---

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
