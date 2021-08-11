import React, { useState } from 'react';
import PostList from './components/PostList';

import './styles/App.css';

export default function App() {
  const [posts1, setPosts1] = useState([
    {
      id: 1,
      title: 'Javascript',
      body: 'Javascript - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, officia.',
    },
    {
      id: 2,
      title: 'React',
      body: 'React - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, officia.',
    },
  ]);
  const [posts2, setPosts2] = useState([
    {
      id: 1,
      title: 'Python',
      body: 'Python - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, officia.',
    },
    {
      id: 2,
      title: 'Django',
      body: 'Django - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, officia.',
    },
  ]);
  return (
    <div className="App">
      <PostList posts={posts1} title="Список постов JS" />
      <PostList posts={posts2} title="Список постов Python" />
    </div>
  );
}
