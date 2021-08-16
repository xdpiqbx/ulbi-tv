# Практика React

## [Канал Ulbi-TV](https://www.youtube.com/channel/UCDzGdB9TTgFm8jRXn1tBdoA)

---

### [React JS фундаментальный курс от А до Я](https://www.youtube.com/watch?v=GNrdg3PzpJQ)

[Моя ветка на GIT](https://github.com/xdpiqbx/ulbi-tv/tree/react-js-fundamentals-course-09-08-2021)

---

### [React TypeScript ПОЛНЫЙ КУРС 2021. Props, Events, Router, Hooks, Requests.](https://www.youtube.com/watch?v=92qcfeWxtnY)

### [ТОП 5 REACT ХУКОВ (React hooks). Делаем свои React хуки](https://www.youtube.com/watch?v=ks8oftGP2oc)

### [Плейлист Redux](https://www.youtube.com/playlist?list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6)

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

### [React JS фундаментальный курс от А до Я](https://www.youtube.com/watch?v=GNrdg3PzpJQ)

#### [Продолжаю](https://youtu.be/GNrdg3PzpJQ?t=5206)

#### [Про useRef](https://youtu.be/GNrdg3PzpJQ?t=3045)

---

## Links

### 1. [React](https://reactjs.org/)

### 2. [React GIT](https://github.com/facebook/react/)

### 3. [React transition group](https://reactcommunity.org/react-transition-group/)

### 4. [Axios](https://axios-http.com/)

### 5. [Axios GIT](https://github.com/axios/axios)

### 6. [REACT ROUTER](https://reactrouter.com/)

### 7. [Intersection Observer API](https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API)

---

```code
npx create-react-app .
npm start
npm install react-transition-group --save
npm install axios
npm install react-router-dom
```

```js
=== index.js ===

import React from 'react'; // Ядро
import ReactDOM from 'react-dom'; // ReactDOM - чтоб вмонтировать компонент в приложение
import App from './App'; // корневорй компонент

ReactDOM.render(<App />, document.getElementById('root'));
```

```js
=== App.js ===

export default function App() {
  return (
    <div className="App">
      <h1>It Works!</h1>
    </div>
  );
}
```

```js
=== App.js без JSX ===

export default function App() {
  return (
    <div className="App">
      <h1>It Works!</h1>
      {
        React.createElement(
          'button',
          {
            disabled: false,
            onClick: () => console.log('Нажал')
          },
          'Нажми мня')
      }
    </div>
  );
}
```

```js
=== counter.js ===

const Counter = () => {
  return(
    <div>

    </div>
  )
}
export default Counter
```

```js
=== counter.js ===

import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Incr</button>
      <button onClick={decrement}>Decr</button>
    </div>
  )
}

export default Counter
```

```js
=== classCounter.js пример классового компонента ===

import { Component } from "react";

export default class ClassCounter extends Component{

  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)

  }

  increment() {
    this.setState({count: this.state.count + 1})
  }

  decrement() {
    this.setState({count: this.state.count - 1})
  }

  render(){
    const {count} = this.state
    return(
      <div>
        <h1>{count}</h1>
        <button onClick={this.increment}>Incr</button>
        <button onClick={this.decrement}>Decr</button>
      </div>
    )
  }
}
```

---

# [Хуки](https://reactjs.org/docs/hooks-reference.html)

1. [useState()](https://reactjs.org/docs/hooks-reference.html#usestate)
2. [useEffect()](https://reactjs.org/docs/hooks-reference.html#useeffect)
3. [useContext()](https://reactjs.org/docs/hooks-reference.html#usecontext)

4. [useRef()](https://reactjs.org/docs/hooks-reference.html#useref)
5. [useMemo()](https://reactjs.org/docs/hooks-reference.html#usememo)
6. [useCallback()](https://reactjs.org/docs/hooks-reference.html#usecallback)
7. [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

---

## useMemo()

- принимает Callback который вернёт результат если изменится одна из зависимостей (из массива зависимостей) переданная вторым параметром.

```js
const sortedPosts = useMemo(() => {
  return getSortedPosts();
}, [selectedSort, posts]);
```

---

## useEffect()

- принимает Callback который отработает если изменится одна из зависимостей (из массива зависимостей) переданная вторым параметром.

```js
// Так отработает 1 раз.
useEffect(() => { ... }, []);

// Так отработает при каждом изменении `filter`.
useEffect(() => { ... }, [filter]);

// Чтоб предотвратить ошибку
useEffect(() => {
  ...
  return () => {
    /* Отработает в момент демонтирования компонента */
    /* Тут очищаем глобальное хранилище */
    /* Тут отписываемся от событий ... */
  }
}, [filter]);
```

---

# [Styling and CSS](https://reactjs.org/docs/faq-styling.html#gatsby-focus-wrapper)

className

```js
render() {
  return <span className="menu">Menu</span>
}
```

inline styles

```js
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')', // use camelCase!
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```

---

> ### Для клонирования этой ветки

```code
git clone https://github.com/xdpiqbx/ulbi-tv.git -b react-js-fundamentals-course-09-08-2021 .
```

`'git clone'` - клонирую

`'https://github.com/xdpiqbx/minin-practice-js.git'` - ссылка на репозиторий

`'-b'` - (branch) ветку

`'react-js-fundamentals-course-09-08-2021'` - название ветки которую клонирую

`'.'` - (точка) в текущую папку

---

[Дополнительные материалы](https://github.com/utimur/react-fundamental-course)

_P.S. Репозиторий просто по фану. Спасибо Ulbi-TV._
