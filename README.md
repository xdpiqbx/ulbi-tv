# Практика React

## [Канал Ulbi-TV](https://www.youtube.com/channel/UCDzGdB9TTgFm8jRXn1tBdoA)

### [React & Redux & TypeScript ПОЛНЫЙ КУРС 2021](https://www.youtube.com/watch?v=ETWABFYv0GM)

### [Continue from ...](https://youtu.be/92qcfeWxtnY?t=1071)

---

```code
npx create-react-app . --template typescript
npm i axios
```

---

```js
import React from 'react';
import { useState } from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  width?: string;
  height?: string; // ? - не обязательно
  variant: CardVariant; // enum CardVariant
  onClick: (num: number) => void; // что вернёт? - void, sting, number
}

/*
const Card: React.FC<CardProps> = (...) => {...}
Card название компонента (как обычно)
React.FC - Тип компонента FC - функциональный компонент
<CardProps> - дженерик тип, интерфейс описанный выше (то что принимает компонет)
*/

const Card: React.FC<CardProps> = (
  { width, height, variant, children, onClick }
  ) => {
  const [state, setState] = useState(0);
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : 'none',
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;
```

---

Создать шаблонный компонент

```js
import React from 'react';

interface ListProps<T> {
  // массив любых елементов
  items: T[];
  // функция котрая принимает елемент и возвращает ReactNode
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  return <div>{props.items.map((item) => props.renderItem(item))}</div>;
}
```

```js
<List
  items={users}
  renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
/>
```

---

### [React JS фундаментальный курс от А до Я](https://www.youtube.com/watch?v=GNrdg3PzpJQ)

[Моя ветка на GIT](https://github.com/xdpiqbx/ulbi-tv/tree/react-js-fundamentals-course-09-08-2021)

---

### [React TypeScript ПОЛНЫЙ КУРС 2021. Props, Events, Router, Hooks, Requests.](https://www.youtube.com/watch?v=92qcfeWxtnY)

[Моя ветка на GIT](https://github.com/xdpiqbx/ulbi-tv/tree/react-type-script-props-events-router-hook-req)

### [React & Redux & TypeScript ПОЛНЫЙ КУРС 2021](https://www.youtube.com/watch?v=ETWABFYv0GM)

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
