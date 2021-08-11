# Практика React

## [Канал Ulbi-TV](https://www.youtube.com/channel/UCDzGdB9TTgFm8jRXn1tBdoA)

---

### [React JS фундаментальный курс от А до Я](https://www.youtube.com/watch?v=GNrdg3PzpJQ)

#### [Продолжаю](https://youtu.be/GNrdg3PzpJQ?t=1082)

---

## Links

### 1. [React](https://reactjs.org/)

### 2. [React GIT](https://github.com/facebook/react/)

---

```code
npx create-react-app .
npm start
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
